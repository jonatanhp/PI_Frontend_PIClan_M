import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cmatricula } from 'src/app/pages/cmatricula/model/cmatricula';

import { AlumnoService } from 'src/providers/alumno/alumno.service';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AlumnoCargasComponent } from '../alumno-cargas/alumno-cargas.component';
import { AlumnoCService } from 'src/providers/alumnoC/alumnoC.service';
import { AgregarCargasComponent } from '../agregar-cargas/agregar-cargas.component';
import { Alumno } from '../../../model/alumno';
import { CmatriculaService } from 'src/providers/cmatricula/cmatricula.service';
import { Carga } from 'src/app/pages/carga/model/carga';
import { CargaA } from 'src/app/pages/carga/model/cargaA';

@Component({
  selector: 'app-contrato-cargas',
  templateUrl: './contrato-cargas.component.html',
  styleUrls: ['./contrato-cargas.component.css']
})
export class ContratoCargasComponent implements OnInit {
  cargas:CargaA[];
error:string;
  constructor(private alumnoService:AlumnoService, private router: Router, private modalService:NgbModal,
    private alumnocService:AlumnoCService,private cmatriculaService:CmatriculaService) { }

  ngOnInit(): void {
    console.log("estoy aqui");
    this.getCargasOfContrato(10);
  }

  getCargasOfContrato(id:number):void{
    this.alumnoService.getCargasOfAlumno(id).subscribe( response=>{
      this.cargas = response.data;
      console.log("recuperacion de niveles");
      console.log(this.cargas);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  for (let g of this.cargas){  
    console.log("añslfjasdf");
    console.log(g.seccion);
    //this.listaNiveles.push(gg);
      
  }

  }

  

}
