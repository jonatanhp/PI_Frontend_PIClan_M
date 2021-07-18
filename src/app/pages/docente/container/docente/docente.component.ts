import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../../model/docente';
import { DocenteService } from 'src/providers/docente/docente.service';
import { DocenteNewComponent } from '../../components/forms/docente-new/docente-new.component';
import { DocenteEditComponent } from '../../components/forms/docente-edit/docente-edit.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  error:string;
  docentes:Docente[];
  docente:Docente;

  constructor(private docenteService:DocenteService, private modalService:NgbModal) {

   }

  ngOnInit(): void {
    this.getDocentes();
  }

  getDocentes():void{
    
    this.docenteService.getDocente().subscribe(response =>{
    this.docentes=response.data;
    console.log(this.docentes);
    }, error =>{
      this.error=error
    });
  }

  public onNewDocente($event):void{
    if($event){
      const docenteForm=this.modalService.open(DocenteNewComponent,{size:'lg'});
      docenteForm.componentInstance.title='New Docente';
      console.log("inicio");
      console.log(docenteForm.result);
      console.log("fin");
      docenteForm.result.then((result)=>{
        console.log(result);
        console.log("fin2")
        this.docenteService.postDocente(result).subscribe(response=>{
          console.log(response);
          
          if(response.success){
            this.getDocentes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  editDocente(id:number):void{
    this.docenteService.getDocenteById(id).subscribe(response=>{
      this.docente=response.data;
      const docenteForm=this.modalService.open(DocenteEditComponent,{size:'lg'});
      docenteForm.componentInstance.title='Edit Docente';
      docenteForm.componentInstance.docente=this.docente;
      docenteForm.result.then((result)=>{
        if(result){
          this.docenteService.updateDocente(this.docente.id, result).subscribe(response=>{
            if (response.success){
              this.getDocentes();
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
    this.docenteService.deleteDocente(id).subscribe(response=>{
      if(response.success){
        this.getDocentes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
