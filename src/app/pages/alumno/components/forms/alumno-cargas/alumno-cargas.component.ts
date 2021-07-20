import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Carga } from 'src/app/pages/carga/model/carga';
import { Cmatricula } from 'src/app/pages/cmatricula/model/cmatricula';
import { Alumno } from '../../../model/alumno';
import { AlumnoService} from '../../../../../../providers/alumno/alumno.service';
import { Nivel } from 'src/app/pages/nivel/model/nivel';
import { Grado } from 'src/app/pages/grado/model/grado';
import { Seccion } from 'src/app/pages/seccion/model/seccion';
import { NivelService } from 'src/providers/nivels/nivels.service';
import { GradoService } from 'src/providers/grado/grado.service';
import { CargaService } from 'src/providers/carga/carga.service';
import { CmatriculaService } from 'src/providers/cmatricula/cmatricula.service';
import { SeccionService } from 'src/providers/seccion/seccion.service';
import { NumericLiteral } from 'typescript';


@Component({
  selector: 'app-alumno-cargas',
  templateUrl: './alumno-cargas.component.html',
  styleUrls: ['./alumno-cargas.component.css']
})
export class AlumnoCargasComponent implements OnInit {
  @Input() title: string;
  @Input() idc:number;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  contratos:Cmatricula[];
  contrato:Cmatricula;
  cargas:Carga[];
  niveles:Nivel[];
  grados:Grado[];
  secciones:Seccion[];
  carga:Carga;
  error:String;
  acargaForm:FormGroup;
  alumno:Alumno;

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private cargaService:CargaService, 
    private nivelService:NivelService, private cmatriculaService:CmatriculaService, private gradoService:GradoService
    , private seccionService:SeccionService) {

      this.acargaForm=this.formBuilder.group({
        curso_docente_seccion_id:['',[Validators.required]],
        contrato_matricula_id:['',[Validators.required]],
        alumno_id:['',[Validators.required]]
      });
       
      
     
     }

  ngOnInit(): void {


    this.seccionService.getCargas(this.idc).subscribe(response => {
      this.cargas = response.data;
      console.log("ggg");
      console.log(this.cargas);
    });
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
      console.log(this.cargas);
    });
  }

}

