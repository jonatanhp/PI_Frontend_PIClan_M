import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Carga } from '../../model/carga';
import { Nivel } from 'src/app/pages/nivel/model/nivel';
import { Grado } from 'src/app/pages/grado/model/grado';

import { Area } from 'src/app/pages/area/model/area';
import { Curso } from 'src/app/pages/curso/model/curso';
import { Docente } from 'src/app/pages/docente/model/docente';
import { NivelService } from 'src/providers/nivels/nivels.service';
import { GradoService } from 'src/providers/grado/grado.service';
import { AreaService } from 'src/providers/area/area.service';
import { DocenteService } from 'src/providers/docente/docente.service';

import { CargaNewComponent } from '../../components/forms/carga-new/carga-new.component';
import { CargaEditComponent } from '../../components/forms/carga-edit/carga-edit.component';
import { CargaService } from 'src/providers/carga/carga.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  error:string;
  niveles:Carga[];
  grados:Grado[];
  secciones:Carga[];
  areas:Area[];
  cursos:Curso[];
  docentes:Docente[];
  cargas:Carga[]
  carga:Carga;

  constructor(private modalService:NgbModal, private nivelService:CargaService, private cargasService:CargaService,
    gradoService:GradoService, areaService:AreaService) {


     }

     ngOnInit(): void {
      this.getCargas();
      
    }
  
   
  
    getCargas():void{
      
      this.cargasService.getCarga().subscribe(response =>{
      this.cargas=response.data;
      console.log(this.cargas);
      }, error =>{
        this.error=error
      });
    }
  
    public onNewCarga($event):void{
      console.log("guardar");
      if($event){
        const nivelForm=this.modalService.open(CargaNewComponent,{size:'lg'});
        nivelForm.componentInstance.title='New carga';
        nivelForm.result.then((result)=>{
          console.log("prueba new carga guardar");
          console.log(result);
          this.cargasService.postCarga(result).subscribe(response=>{
            if(response.success){
              this.getCargas();
            }
          }, error=>{
            this.error=error
          });
        });
      }
    }
  
    editCarga(id:number):void{
      this.cargasService.getCargaById(id).subscribe(response=>{
        this.carga=response.data;
        console.log("hola");
        console.log(this.carga.fecha_inicio);
        console.log("hola fin");
        const nivelForm=this.modalService.open(CargaEditComponent,{size:'lg'});
        nivelForm.componentInstance.title='Edit Carga';
        nivelForm.componentInstance.nivel=this.carga;
        nivelForm.result.then((result)=>{
          if(result){
            this.nivelService.updateCarga(this.carga.id, result).subscribe(response=>{
              if (response.success){
                this.getCargas();
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
  
   
    public delete(id: number):void{
      this.cargasService.deleteCarga(id).subscribe(response=>{
        if(response.success){
          this.getCargas();
          console.log('ffff');
        }
      }, error=>{
        this.error=error;
      });
    }
  

}
