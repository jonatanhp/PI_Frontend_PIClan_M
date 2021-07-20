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
import { ContratoCargasComponent } from '../contrato-cargas/contrato-cargas.component';
import { CargaA } from 'src/app/pages/carga/model/cargaA';

@Component({
  selector: 'app-alumno-contratos',
  templateUrl: './alumno-contratos.component.html',
  styleUrls: ['./alumno-contratos.component.css']
})
export class AlumnoContratosComponent implements OnInit {

  gradoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  cmatriculas:Cmatricula[];
  cmatricula:Cmatricula;
  cmatricula2:Cmatricula;
  alumno:Alumno;
  cargas:CargaA[];
  error:String;
  s:AlumnoContratosComponent;

  constructor(private alumnoService:AlumnoService, private router: Router, private modalService:NgbModal,
    private alumnocService:AlumnoCService,private cmatriculaService:CmatriculaService) { }

  ngOnInit(): void {
    this.update(10);
  }

  closeModal() {
    this.onClose.emit(true);
}

/*getCargasOfContrato(id:number):void{
  this.alumnoService.getCargasOfAlumno(id).subscribe(response=>{
    this.cargas=response.data;

    for (let g of this.cargas){  
      console.log("añslfjasdf");
      console.log(g.seccion);
      //this.listaNiveles.push(gg);
        
    }
    const gradosOfNivelForm=this.modalService.open(ContratoCargasComponent,{size:'lg'});
    gradosOfNivelForm.componentInstance.title="Lista de grados";
    gradosOfNivelForm.componentInstance.grados=this.cargas;
    console.log("inicio recuperar grados de nivel");
    console.log(this.cargas);
    for (let g of this.cargas){  
      console.log("añslfjasdf");
      console.log(g.seccion);
      //this.listaNiveles.push(gg);
        
    }
    
    console.log("fin recuperar grados de nivel");
  });

}
*/
  goto($event){
      if($event){
        this.redirectInto();
        

      }

  }


  

  

  
  
  redirectInto(): void {
    this.router.navigate(['representantes']);
    
  }


  


  getCargasOfContrato(id:number):void{
    console.log("cuaster1023");
    console.log(this.cmatricula.alumno_id);
    this.alumnoService.getCargasOfAlumno(this.cmatricula.alumno_id).subscribe(response=>{
      this.cargas=response.data;
      console.log("qqqqqq");
      console.log(this.cargas);

      for (let g of this.cargas){  
        console.log("añslfjasdf");
        console.log(g.seccion);
        //this.listaNiveles.push(gg);
          
      }
      const gradosOfNivelForm=this.modalService.open(ContratoCargasComponent,{size:'lg'});
      gradosOfNivelForm.componentInstance.title="Lista de grados";
      gradosOfNivelForm.componentInstance.cargas=this.cargas;
      console.log("inicio recuperar cargas de conttrato");
      console.log(this.cargas);
      for (let g of this.cargas){  
        console.log("añslfjasdf");
        console.log(g.seccion);
        //this.listaNiveles.push(gg);
          
      }
      
      console.log("fin recuperar grados de nivel");
    });

  }

    update(eventalumno: number){
      console.log("nnnn");
      console.log(eventalumno);  
      
      this.cmatriculaService.getCmatriculaById(eventalumno).subscribe(response=>{
        this.cmatricula=response.data;})
      console.log("mostrar matricula recuperada");
      console.log(this.cmatricula);
       
        
       
    
        
        
    
      }


    public agregarCarga(eventalumno: number):void{

      this.cmatriculaService.getCmatriculaById(eventalumno).subscribe(response=>{
        this.cmatricula=response.data
        
      
      })

      //this.cmatricula=this.cmatriculaService.getCmatriculaById(eventalumno).subscribe()
      
     
      
      //if($event){
        const nivelForm=this.modalService.open(AgregarCargasComponent,{size:'lg'});
        
       // this.cmatricula2=this.cmatricula;
        console.log("prueba new nivel");
        console.log("mostrar matricula recuperada");
        console.log(this.cmatricula);
        //console.log(this.cmatricula.alumno_id);
        nivelForm.componentInstance.title='New Nivel';
        nivelForm.componentInstance.idAlumno=this.cmatricula.alumno_id//this.cmatricula.alumno_id;
        nivelForm.componentInstance.idContrato=eventalumno;
        nivelForm.result.then((result)=>{
          console.log("mostrar matricula recuperada");
          console.log(this.cmatricula);
          console.log("prueba new nivel guardar");
          console.log(result);
          this.alumnocService.postAlumnoC(result).subscribe(response=>{
            if(response.success){
              
            }
          }, error=>{
            this.error=error
          });
        });
      //}
    }
  

}
