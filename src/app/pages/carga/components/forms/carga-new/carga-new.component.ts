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

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


import { Resume, Experience, Education, Skill } from './resume';

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
  degree:Date;
  ccc:string;
  
  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

   resume = new Resume();
   degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];

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
    
    this.getNiveles();

    this.getDocentes();
    
  }

  getAreas(){
    this.areaService.getArea().subscribe( response=>{
      this.areas = response.data;
     
  }, error => {
    this.error = error; 

  });
  }

  getCursosOfAreas(event):void{
    const element = event.currentTarget as HTMLSelectElement
    const value = element.value
    console.log(value);
    this.areaService.getCursos(parseInt(value)).subscribe(response => {
      this.cursos = response.data;
      console.log("ggg");
      console.log("hola perro");
      console.log(this.cursos);
      console.log(this.cursos);
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

  getDocentes():void{
    this.docenteService.getDocente().subscribe( response=>{
      this.docentes = response.data;
     
  }, error => {
    this.error = error; 

  });

  }

  public save():void{
    if (this.cargaForm.valid){
      this.activeModal.close(this.cargaForm.value);
    }
  }


  getDocumentDefinition() {
    
    sessionStorage.setItem('resume', JSON.stringify(this.resume)); ​    
     return {
       content: [
         {
           text: 'Contrato',
           bold: true,
           fontSize: 20,
           alignment: 'center',
           margin: [0, 0, 0, 20]
         },
         {
           columns: [
             [{
               text: this.resume.name,
               style: 'name'
             },
             {
               text: this.resume.address
             },
             {
               text: 'Email : ' + this.degree
             },
             {
               text: 'Contant No : ' + this.ccc,
             },
             {
               text: 'GitHub: ' + `${localStorage.getItem('nameUser')}`,
               link: this.resume.socialProfile,
               color: 'blue',
             }
             ],
             [
               // Document definition for Profile pic
             ]
           ]
         }],
         styles: {
           name: {
             fontSize: 16,
             bold: true
           }
         }
     };
   }

}
