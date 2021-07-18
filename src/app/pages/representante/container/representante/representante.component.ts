import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Representante } from '../../model/representante';
import { RepresentanteService } from 'src/providers/representante/representante.service';
import { RepresentanteNewComponent } from '../../components/forms/representante-new/representante-new.component';
import { RepresentanteEditComponent } from '../../components/forms/representante-edit/representante-edit.component';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit {

  error:string;
  representantes:Representante[];
  representante:Representante;

  constructor(private representanteService:RepresentanteService, private modalService:NgbModal) {

   }

  ngOnInit(): void {
    this.getRepresentantes();
  }

  getRepresentantes():void{
    
    this.representanteService.getRepresentante().subscribe(response =>{
    this.representantes=response.data;
    console.log(this.representantes);
    }, error =>{
      this.error=error
    });
  }

  public onNewRepresentante($event):void{
    if($event){
      const representanteForm=this.modalService.open(RepresentanteNewComponent,{size:'lg'});
      representanteForm.componentInstance.title='New Representante';
      console.log("inicio");
      console.log(representanteForm.result);
      console.log("fin");
      representanteForm.result.then((result)=>{
        console.log(result);
        console.log("fin2")
        this.representanteService.postRepresentante(result).subscribe(response=>{
          console.log(response);
          
          if(response.success){
            this.getRepresentantes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  editRepresentante(id:number):void{
    this.representanteService.getRepresentanteById(id).subscribe(response=>{
      this.representante=response.data;
      const representanteForm=this.modalService.open(RepresentanteEditComponent,{size:'lg'});
      representanteForm.componentInstance.title='Edit Representante';
      representanteForm.componentInstance.representante=this.representante;
      representanteForm.result.then((result)=>{
        if(result){
          this.representanteService.updateRepresentante(this.representante.id, result).subscribe(response=>{
            if (response.success){
              this.getRepresentantes();
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
    this.representanteService.deleteRepresentante(id).subscribe(response=>{
      if(response.success){
        this.getRepresentantes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
