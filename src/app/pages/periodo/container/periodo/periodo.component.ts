import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Periodo } from '../../model/periodo';
import { PeriodoService } from 'src/providers/periodo/periodo.service';
import { PeriodoNewComponent } from '../../components/forms/periodo-new/periodo-new.component';
import { PeriodoEditComponent } from '../../components/forms/periodo-edit/periodo-edit.component';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit {

  error:string;
  periodos:Periodo[];
  periodo:Periodo;
  //grados:Grado[];

  constructor(private periodoService:PeriodoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getPeriodoes();
  }

  getPeriodoes():void{
    
    this.periodoService.getPeriodo().subscribe(response =>{
    this.periodos=response.data;
    console.log(this.periodos);
    console.log("asdfasdf");
    }, error =>{
      this.error=error
    });
  }

  public onNewPeriodo($event):void{
    console.log("prueba new periodo");
    if($event){
      const periodoForm=this.modalService.open(PeriodoNewComponent,{size:'lg'});
      periodoForm.componentInstance.title='New Periodo';
      periodoForm.result.then((result)=>{
        console.log("prueba new periodo guardar");
        console.log(result);
        this.periodoService.postPeriodo(result).subscribe(response=>{
          if(response.success){
            this.getPeriodoes();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  editPeriodo(id:number):void{
    this.periodoService.getPeriodoById(id).subscribe(response=>{
      this.periodo=response.data;
      console.log("hola");
      console.log(this.periodo.nom_periodo);
      console.log("hola fin");
      const periodoForm=this.modalService.open(PeriodoEditComponent,{size:'lg'});
      periodoForm.componentInstance.title='Edit Periodo';
      periodoForm.componentInstance.periodo=this.periodo;
      periodoForm.result.then((result)=>{
        if(result){
          this.periodoService.updatePeriodo(this.periodo.id, result).subscribe(response=>{
            if (response.success){
              this.getPeriodoes();
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
    this.periodoService.deletePeriodo(id).subscribe(response=>{
      if(response.success){
        this.getPeriodoes();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

}
