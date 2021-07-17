import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/providers/alumno/alumno.service';
import { Alumno } from '../../model/alumno';
import { AlumnoNewComponent } from '../../components/forms/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../components/forms/alumno-edit/alumno-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  error:string;
  alumnos:Alumno[];
  alumno:Alumno;

  constructor(private alumnoService:AlumnoService, private modalService:NgbModal) {

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

}
