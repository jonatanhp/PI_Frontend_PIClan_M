import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Inject } from '@angular/core';
import { Periodo } from 'src/app/pages/periodo/model/periodo';
import { Representante } from 'src/app/pages/representante/model/representante';

import { PeriodoService } from 'src/providers/periodo/periodo.service';
import { RepresentanteService } from 'src/providers/representante/representante.service';

@Component({
  selector: 'app-cmatricula-new',
  templateUrl: './cmatricula-new.component.html',
  styleUrls: ['./cmatricula-new.component.css']
})
export class CmatriculaNewComponent implements OnInit {
  error:string;
  representantes:Representante[];
  periodos:Periodo[];
  matriculaForm:FormGroup;
  @Input() title: string;
  @Input() ids: string; 
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  
  constructor(public formBuilder:FormBuilder, public activeModal: NgbActiveModal, 
  private periodoService:PeriodoService, private representanteService:RepresentanteService) {
   
    this.matriculaForm=this.formBuilder.group({
      
      cod_matricula:['',[Validators.required]],
      confirmacion:['',[Validators.required]],
      periodo_id:['',[Validators.required]],
      alumno_id:[this.ids,[Validators.required]],
      
      representante_id:['',[Validators.required]],
      
    });
    console.log("asdfañlsdfjasd");
    console.log(this.ids);
   }
   
  ngOnInit(): void {
    
    this.getRepresentantes();
    this.getPeriodos();
  }

  public save():void{
   
    if (this.matriculaForm.valid){
      this.activeModal.close(this.matriculaForm.value);
    }
  }

  getPeriodos(){
    this.periodoService.getPeriodo().subscribe( response=>{
      this.periodos = response.data;
      console.log("recuperacion de periodos");
      console.log(this.periodos);
      console.log("fin de recuperación de periodos");
  }, error => {
    this.error = error; 

  });
  }

  getRepresentantes(){
    this.representanteService.getRepresentante().subscribe( response=>{
      this.representantes = response.data;
      console.log("recuperacion de representantes");
      console.log(this.representantes);
      console.log("fin de recuperación de representantes");
  }, error => {
    this.error = error; 

  });
  }

}
