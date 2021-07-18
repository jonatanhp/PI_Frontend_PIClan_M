import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Curso } from '../../../../curso/model/curso';
import { AreaService } from '../../../../../../providers/area/area.service';

@Component({
  selector: 'ngx-area-cursos',
  templateUrl: './area-cursos.component.html',
  styleUrls: ['./area-cursos.component.scss']
})
export class AreaCursosComponent implements OnInit {

  cursoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  cursos:Curso[];
  error:String;

  constructor( private areaService:AreaService) { }

  ngOnInit(): void {

  }

  getCursosOfNivel(id:number):void{
    this.areaService.getCursos(id).subscribe( response=>{
      this.cursos = response.data;
      console.log("recuperacion de areaes");
      console.log(this.cursos);
      console.log("fin de recuperación de areaes");
  }, error => {
    this.error = error; 

  });
  for (let g of this.cursos){  
    console.log("añslfjasdf");
    console.log(g.nom_curso);
    //this.listaNiveles.push(gg);
      
  }

  }


}
