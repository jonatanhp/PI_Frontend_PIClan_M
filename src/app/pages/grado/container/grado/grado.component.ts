import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Grado } from '../../model/grado';
import { Nivel} from '../../../nivel/model/nivel';

import { GradoService} from '../../../../../providers/grado/grado.service';
import { GradoNewComponent } from '../../components/forms/grado-new/grado-new.component';
import { GradoEditComponent } from '../../components/forms/grado-edit/grado-edit.component';


@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.scss']
})
export class GradoComponent implements OnInit {

  error:string;
  gradosf:Grado[];
  grado:Grado;
  nivel:Nivel;
  //@Input() nivel: Nivel;
  listaNiveles:Nivel[];
  array:Object[];

  constructor(private gradoService:GradoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getGradoes();
    

  }

   getGradoes():void{
    
    this.gradoService.getGrado().subscribe(response =>{
    this.gradosf=response.data;
    
    });
    
   
  }

  public onNewGrado($event):void{
    if($event){
      const gradoForm=this.modalService.open(GradoNewComponent,{size:'lg'});
      gradoForm.componentInstance.title='New Grado';
      gradoForm.result.then((result)=>{
        this.gradoService.postGrado(result).subscribe(response=>{
          if(response.success){
            this.getGradoes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  public editGrado(id:number):void{
    this.gradoService.getGradoById(id).subscribe(response=>{
      this.grado=response.data;
      const gradoForm=this.modalService.open(GradoEditComponent,{size:'lg'});
      gradoForm.componentInstance.title='Edit Grado';
      gradoForm.componentInstance.grado=this.grado;
      gradoForm.result.then((result)=>{
        if(result){
          this.gradoService.updateGrado(this.grado.id, result).subscribe(response=>{
            if (response.success){
              this.getGradoes();
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
    this.gradoService.deleteGrado(id).subscribe(response=>{
      if(response.success){
        this.getGradoes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

  

  

}
