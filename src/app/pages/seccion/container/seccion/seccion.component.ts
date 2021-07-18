import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Seccion } from '../../model/seccion';
import { Grado } from '../../../grado/model/grado';
import { Nivel } from '../../../nivel/model/nivel';
import { SeccionService } from '../../../../../providers/seccion/seccion.service';

import { SeccionNewComponent } from '../../components/forms/seccion-new/seccion-new.component';
import { NivelService } from 'src/providers/nivels/nivels.service';
import { SeccionEditComponent } from '../../components/forms/seccion-edit/seccion-edit.component';

@Component({
  selector: 'ngx-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})


export class SeccionComponent implements OnInit {

  error:string;
  grados:Grado[];
  grado:Grado;
  nivel:Nivel;
  //@Input() nivel: Nivel;
  niveles:Nivel[];
  array:Object[];
  seccion:Seccion;
  secciones:Seccion[];

  constructor( private modalService:NgbModal, private nivelService:NivelService, private seccionService:SeccionService) { }

  ngOnInit(): void {
    this.getSecciones();
    this.getListNivelesToSeccion();
  }

  getListNivelesToSeccion():void{
    
    this.nivelService.getNivel().subscribe(response =>{
    this.niveles=response.data;
    console.log(this.niveles);
    }, error =>{
      this.error=error
    });
  }

  getSecciones():void{
    
    this.seccionService.getSeccion().subscribe(response =>{
    this.secciones=response.data;
    console.log(this.secciones);
    }, error =>{
      this.error=error
    });
  }

  public onNewSeccion($event):void{
    console.log("guardar");
    if($event){
      const nivelForm=this.modalService.open(SeccionNewComponent,{size:'lg'});
      nivelForm.componentInstance.title='New Nivel';
      nivelForm.result.then((result)=>{
        this.seccionService.postSeccion(result).subscribe(response=>{
          if(response.success){
            this.getSecciones();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  editNivel(id:number):void{
    this.nivelService.getNivelById(id).subscribe(response=>{
      this.nivel=response.data;
      console.log("hola");
      console.log(this.nivel.nom_nivel);
      console.log("hola fin");
      const nivelForm=this.modalService.open(SeccionEditComponent,{size:'lg'});
      nivelForm.componentInstance.title='Edit Nivel';
      nivelForm.componentInstance.nivel=this.nivel;
      nivelForm.result.then((result)=>{
        if(result){
          this.nivelService.updateNivel(this.nivel.id, result).subscribe(response=>{
            if (response.success){
              this.getSecciones();
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
    this.seccionService.deleteSeccion(id).subscribe(response=>{
      if(response.success){
        this.getSecciones();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
