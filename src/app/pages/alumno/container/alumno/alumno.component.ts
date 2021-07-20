import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/providers/alumno/alumno.service';
import { Alumno } from '../../model/alumno';
import { AlumnoNewComponent } from '../../components/forms/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../components/forms/alumno-edit/alumno-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeriodoService } from 'src/providers/periodo/periodo.service';
import { RepresentanteService } from 'src/providers/representante/representante.service';
import { Periodo } from 'src/app/pages/periodo/model/periodo';
import { Representante } from 'src/app/pages/representante/model/representante';
import { AlumnoContratosComponent} from '../../../../pages/alumno/components/forms/alumno-contratos/alumno-contratos.component';

import { CmatriculaNewComponent } from 'src/app/pages/cmatricula/components/forms/cmatricula-new/cmatricula-new.component';
import { CmatriculaEditComponent } from 'src/app/pages/cmatricula/components/forms/cmatricula-edit/cmatricula-edit.component';
import { CmatriculaService } from 'src/providers/cmatricula/cmatricula.service';
import { inject } from '@angular/core/testing';
import { Cmatricula } from 'src/app/pages/cmatricula/model/cmatricula';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  error:string;
  alumnos:Alumno[];
  alumnoss:Alumno[];
  alumno:Alumno;
  periodos:Periodo[];
  representantes:Representante[];
  cmatriculas:Cmatricula[];

  constructor(private alumnoService:AlumnoService, private periodoService:PeriodoService,
    representanteService:RepresentanteService, private cmatriculaService:CmatriculaService, private modalService:NgbModal) {

   }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos():void{
    
    this.alumnoService.getAlumno().subscribe(response =>{
    this.alumnos=response.data;
    console.log(this.alumnos);
    }, error =>{
      this.error=error
    });
  }

  public onNewAlumno($event):void{
    if($event){
      const alumnoForm=this.modalService.open(AlumnoNewComponent,{size:'lg'});
      alumnoForm.componentInstance.title='New Alumno';
      console.log("inicio");
      console.log(alumnoForm.result);
      console.log("fin");
      alumnoForm.result.then((result)=>{
        console.log(result);
        console.log("fin2")
        this.alumnoService.postAlumno(result).subscribe(response=>{
          console.log(response);
          
          if(response.success){
            this.getAlumnos();
          }
        }, error=>{
          this.error=error
        });
      });
    }
  }

  editAlumno(id:number):void{
    this.alumnoService.getAlumnoById(id).subscribe(response=>{
      this.alumno=response.data;
      const alumnoForm=this.modalService.open(AlumnoEditComponent,{size:'lg'});
      alumnoForm.componentInstance.title='Edit Alumno';
      alumnoForm.componentInstance.alumno=this.alumno;
      alumnoForm.result.then((result)=>{
        if(result){
          this.alumnoService.updateAlumno(this.alumno.id, result).subscribe(response=>{
            if (response.success){
              this.getAlumnos();
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
    this.alumnoService.deleteAlumno(id).subscribe(response=>{
      if(response.success){
        this.getAlumnos();
        console.log('ffff');
      }
    }, error=>{
      this.error=error;
    });
  }

  onNewMatricula(eventalumno: number){
    console.log("nnnn");
    console.log(eventalumno);   
      
      const productForm = this.modalService.open(CmatriculaNewComponent,  {size: 'lg'});
      productForm.componentInstance.ids= eventalumno;
      productForm.componentInstance.title = 'Nueva Matricula';
      productForm.componentInstance.ids=eventalumno;
      console.log("qwert");
      console.log(productForm.componentInstance.ids);
      console.log("qwert");
      productForm.result.then((result) => {
        console.log("ya estoy harto");
        console.log(result);
        this.cmatriculaService.postCmatricula(result).subscribe(response => {
          //if (response.success) {
            console.log(response);
          //}
        }, error => {
          this.error = error;
        });
    
      });
  
      
      
  
    }

    getContratosOfAlumno(id:number):void{
      this.alumnoService.getContratos(id).subscribe(response=>{
        this.cmatriculas=response.data;
        console.log("muerete");
        for (let g of this.cmatriculas){  
          console.log("añslfjasdf");
          console.log(g.cod_matricula);
          //this.listaNiveles.push(gg);
            
        }
        const gradosOfNivelForm=this.modalService.open(AlumnoContratosComponent,{size:'lg'});
        gradosOfNivelForm.componentInstance.title="Lista de grados";
        gradosOfNivelForm.componentInstance.cmatriculas=this.cmatriculas;
        console.log("inicio recuperar grados de nivel");
        console.log(this.cmatriculas);
        for (let g of this.cmatriculas){  
          console.log("añslfjasdf");
          console.log(g.cod_matricula);
          //this.listaNiveles.push(gg);
            
        }
        
        console.log("fin recuperar grados de nivel");
      });
  
    }

}
