import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Nivel } from '../../../../nivel/model/nivel';
import { Grado } from '../../../../grado/model/grado';

import { GradoService } from '../../../../../../providers/grado/grado.service';
import { NivelService } from 'src/providers/nivels/nivels.service';
import { Seccion } from 'src/app/pages/seccion/model/seccion';
import { SeccionService } from 'src/providers/seccion/seccion.service';
import { Carga } from 'src/app/pages/carga/model/carga';


@Component({
  selector: 'app-agregar-cargas',
  templateUrl: './agregar-cargas.component.html',
  styleUrls: ['./agregar-cargas.component.css']
})
export class AgregarCargasComponent implements OnInit {

  cargaAForm:FormGroup;
  @Input() title: string;
  @Input() idContrato:number;
  @Input() idAlumno:number;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  grados:Grado[];
  niveles:Nivel[];
  secciones:Seccion[];
  error:String;
  cargas:Carga[];
  selected:HTMLSelectElement;

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private gradoService:GradoService, 
    private nivelService:NivelService, private seccionService:SeccionService) { 

      this.cargaAForm=this.formBuilder.group({
        alumno_id:[this.idAlumno,[Validators.required]],
        contrato_matricula_id:[this.idContrato,[Validators.required]],
        curso_docente_seccion_id:['',[Validators.required]],
        selected:['']
      });
    }

  ngOnInit(): void {
    this.getNiveles();
  }

  getNiveles(){
    this.nivelService.getNivel().subscribe( response=>{
      this.niveles = response.data;
     
  }, error => {
    this.error = error; 

  });
  }

  getGradosOfNivel(event):void{
    const element = event.currentTarget as HTMLSelectElement
    const value = element.value
    console.log(value);
    this.nivelService.getGrados(parseInt(value)).subscribe(response => {
      this.grados = response.data;
      console.log("ggg");
      console.log(this.grados);
    });
  }

  getSeccionesOfGrado(event):void{
    
    console.log("actualizar ffff");
    this.cargaAForm.updateOn;
    this.cargaAForm.reset;
    this.cargaAForm.updateValueAndValidity;
    this.cargaAForm.value;
    this.cargaAForm.valueChanges;
    this.cargaAForm.get;
    this.cargaAForm.enabled;
    this.cargaAForm.controls.contrato_matricula_id.setValue(this.idContrato);
    this.cargaAForm.controls.contrato_matricula_id.get;
    this.cargaAForm.patchValue({
      contrato_matricula_id: this.idContrato
   });
   this.cargaAForm.patchValue({
    alumno_id: this.idAlumno
 });
    console.log(this.cargaAForm.value);
    console.log("actualizar ffff");
    console.log(this.idContrato);
    
    const element = event.currentTarget as HTMLSelectElement
    const value = element.value
    console.log(value);
    this.gradoService.getSecciones(parseInt(value)).subscribe(response => {
      this.secciones = response.data;
      console.log("ggg");
      console.log(this.secciones);
    });
  }

  getCargasOfSeccion(event):void{
    
    const element = event.currentTarget as HTMLSelectElement
    const value = element.value
    console.log(value);
    this.seccionService.getCargas(parseInt(value)).subscribe(response => {
      this.cargas = response.data;
      console.log("ggg");
      console.log("tttttt");
      console.log(this.cargas);
    });
  }
  public update():void{
    console.log("actualizar ffff");
    this.cargaAForm.updateOn
    console.log(this.cargaAForm.value);
   
  }
  

  public save():void{
    console.log("adshñljasdf");
    this.cargaAForm.updateOn
    if (this.cargaAForm.valid){
      this.activeModal.close(this.cargaAForm.value);
    }
  }


}
