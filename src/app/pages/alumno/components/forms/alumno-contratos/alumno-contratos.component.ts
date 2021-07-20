import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cmatricula } from 'src/app/pages/cmatricula/model/cmatricula';
import { AlumnoService } from 'src/providers/alumno/alumno.service';
import { Router } from '@angular/router';

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
  error:String;
  s:AlumnoContratosComponent;

  constructor(private alumnoService:AlumnoService, private router: Router) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onClose.emit(true);
}

  getContratosOfAlumno(id:number):void{
    this.alumnoService.getContratos(id).subscribe( response=>{
      this.cmatriculas = response.data;
      console.log("recuperacion de niveles");
      console.log(this.cmatriculas);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  for (let g of this.cmatriculas){  
    console.log("añslfjasdf");
    console.log(g.cod_matricula);
    //this.listaNiveles.push(gg);
      
  }

  }

  goto($event){
      if($event){
        this.redirectInto();
        

      }

  }

  

  
  
  redirectInto(): void {
    this.router.navigate(['representantes']);
    
  }

}
