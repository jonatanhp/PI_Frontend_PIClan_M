import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NbDialogRef} from '@nebular/theme';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


import { Nivel } from '../../../model/nivel';
import { Grado } from '../../../../grado/model/grado';
import { NivelService } from 'src/providers/nivels/nivels.service';

@Component({
  selector: 'app-nivel-grados',
  templateUrl: './nivel-grados.component.html',
  styleUrls: ['./nivel-grados.component.scss']
})
export class NivelGradosComponent implements OnInit {

  gradoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  grados:Grado[];
  error:String;

  constructor( private nivelService:NivelService) { }

  ngOnInit(): void {

  }

  getGradosOfNivel(id:number):void{
    this.nivelService.getGrados(id).subscribe( response=>{
      this.grados = response.data;
      console.log("recuperacion de niveles");
      console.log(this.grados);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  for (let g of this.grados){  
    console.log("añslfjasdf");
    console.log(g.nom_grado);
    //this.listaNiveles.push(gg);
      
  }

  }

  

}



