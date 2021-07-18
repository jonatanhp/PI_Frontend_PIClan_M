import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Curso } from '../../model/curso';
import { Area } from '../../../area/model/area';
import { CursoService } from '../../../../../providers/curso/curso.service';
import { CursoNewComponent } from '../../components/forms/curso-new/curso-new.component';
import { CursoEditComponent } from '../../components/forms/curso-edit/curso-edit.component';

@Component({
  selector: 'ngx-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  error:string;
  cursos:Curso[];
  curso:Curso;
  area:Area;
  //@Input() area: Area;
  areas:Area[];
  array:Object[];

  constructor(private cursoService:CursoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getCursoes();
    

  }

   getCursoes():void{
    
    this.cursoService.getCurso().subscribe(response =>{
    this.cursos=response.data;
    
    console.log("cursos inicio");
    console.log(this.cursos);
    console.log("cursos inicio");

    });
    
    
   }
    
    
  

  public onNewCurso($event):void{
    if($event){
      const cursoForm=this.modalService.open(CursoNewComponent,{size:'lg'});
      cursoForm.componentInstance.title='New Curso';
      cursoForm.result.then((result)=>{
        this.cursoService.postCurso(result).subscribe(response=>{
          if(response.success){
            this.getCursoes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  public editCurso(id:number):void{
    this.cursoService.getCursoById(id).subscribe(response=>{
      this.curso=response.data;
      const cursoForm=this.modalService.open(CursoEditComponent,{size:'lg'});
      cursoForm.componentInstance.title='Edit Curso';
      cursoForm.componentInstance.curso=this.curso;
      cursoForm.result.then((result)=>{
        if(result){
          this.cursoService.updateCurso(this.curso.id, result).subscribe(response=>{
            if (response.success){
              this.getCursoes();
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
    this.cursoService.deleteCurso(id).subscribe(response=>{
      if(response.success){
        this.getCursoes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

  

}
