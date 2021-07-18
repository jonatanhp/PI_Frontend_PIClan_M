import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Curso } from 'src/app/pages/curso/model/curso';
import { Seccion } from 'src/app/pages/seccion/model/seccion';
import { Docente } from 'src/app/pages/docente/model/docente';

import { CursoService } from 'src/providers/curso/curso.service';
import { SeccionService } from 'src/providers/seccion/seccion.service';
import { DocenteService } from 'src/providers/docente/docente.service';

import { Nivel } from 'src/app/pages/nivel/model/nivel';
import { Area } from 'src/app/pages/area/model/area';
import { Grado } from 'src/app/pages/grado/model/grado';
import { NivelService } from 'src/providers/nivels/nivels.service';
import { AreaService } from 'src/providers/area/area.service';

import { GradoService } from 'src/providers/grado/grado.service';


@Component({
  selector: 'app-carga-new',
  templateUrl: './carga-new.component.html',
  styleUrls: ['./carga-new.component.css']
})
export class CargaNewComponent implements OnInit {

  cargaForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  areas:Area[];
  cursos:Curso[];
  niveles:Nivel[];
  grados:Grado[];
  secciones:Seccion[];
  docentes:Docente[];
  error:String;

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private areaService:AreaService, 
    private nivelService:NivelService, private docenteService:DocenteService, private gradoService:GradoService) {

    this.cargaForm=this.formBuilder.group({
      fecha_inicio:['',[Validators.required]],
      fecha_fin:['',[Validators.required]],
      curso_id:['',[Validators.required]],
      seccion_id:['',[Validators.required]],
      docente_id:['',[Validators.required]]
    });

   }

  ngOnInit(): void {
    this.getAreas();
    this.getCursosOfAreas(18);
    this.getNiveles();
    this.getGradosOfNivel(1);
  }

  getAreas(){
    this.areaService.getArea().subscribe( response=>{
      this.secciones = response.data;
     
  }, error => {
    this.error = error; 

  });
  }

  getCursosOfAreas(id:number):void{
    console.log("asdfag");
    this.areaService.getCursos(id).subscribe(response=>{
      this.cursos=response.data;
      console.log(this.cursos);
    });
  }

  getNiveles(){
    this.nivelService.getNivel().subscribe( response=>{
      this.secciones = response.data;
     
  }, error => {
    this.error = error; 

  });
  }

  getGradosOfNivel(id:number):void{
    
    this.nivelService.getGrados(id).subscribe(response=>{
      this.grados=response.data;
      console.log(this.grados);
    });
  }

  getSeccionesOfGrado(id:number):void{
    
    this.gradoService.getCursos(id).subscribe(response=>{
      this.cursos=response.data;
      console.log(this.cursos);
    });
  }

  public save():void{
    if (this.cargaForm.valid){
      this.activeModal.close(this.cargaForm.value);
    }
  }

}
