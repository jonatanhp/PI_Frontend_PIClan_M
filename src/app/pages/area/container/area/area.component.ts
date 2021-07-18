import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Area } from '../../model/area';
import { Curso } from '../../../curso/model/curso';
import { AreaService } from '../../../../../providers/area/area.service';

import { AreaNewComponent } from '../../components/forms/area-new/area-new.component';
import { AreaEditComponent } from '../../components/forms/area-edit/area-edit.component';
import { AreaCursosComponent } from '../../components/forms/area-cursos/area-cursos.component';
import { CursoService } from 'src/providers/curso/curso.service';

@Component({
  selector: 'ngx-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  error:string;
  areas:Area[];
  area:Area;
  cursos:Curso[];

  constructor(private areaService:AreaService, private cursoService:CursoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getAreaes();
  }

  getAreaes():void{
    
    this.areaService.getArea().subscribe(response =>{
    this.areas=response.data;
    console.log(this.areas);
    console.log("asdfasdf");
    }, error =>{
      this.error=error
    });
  }

  public onNewArea($event):void{
    console.log("prueba new area");
    if($event){
      const areaForm=this.modalService.open(AreaNewComponent,{size:'lg'});
      areaForm.componentInstance.title='New Area';
      areaForm.result.then((result)=>{
        this.areaService.postArea(result).subscribe(response=>{
          if(response.success){
            this.getAreaes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  editArea(id:number):void{
    this.areaService.getAreaById(id).subscribe(response=>{
      this.area=response.data;
      console.log("hola");
      console.log(this.area.nom_area);
      console.log("hola fin");
      const areaForm=this.modalService.open(AreaEditComponent,{size:'lg'});
      areaForm.componentInstance.title='Edit Area';
      areaForm.componentInstance.area=this.area;
      areaForm.result.then((result)=>{
        if(result){
          this.areaService.updateArea(this.area.id, result).subscribe(response=>{
            if (response.success){
              this.getAreaes();
            }
          }, error=>{
            this.error=error;
          });
        }
        console.log(result);
      });
    }, error=>{
      this.error=error;
    })
  }

  searchCursosOfArea(id:number):void{
    this.areaService.getCursos(id).subscribe(response=>{
      this.cursos=response.data;

     
      const cursosOfAreaForm=this.modalService.open(AreaCursosComponent,{size:'lg'});
      cursosOfAreaForm.componentInstance.title="Lista de cursos";
      cursosOfAreaForm.componentInstance.cursos=this.cursos;
      console.log("inicio recuperar cursos de area");
      console.log(this.cursos);
      for (let g of this.cursos){  
        console.log("añslfjasdf");
        console.log(g.nom_curso);
        //this.listaAreaes.push(gg);
          
      }
      
      console.log("fin recuperar cursos de area");
    });

  }

  public delete(id: number):void{
    this.areaService.deleteArea(id).subscribe(response=>{
      if(response.success){
        this.getAreaes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
