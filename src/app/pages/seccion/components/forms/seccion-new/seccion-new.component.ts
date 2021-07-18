import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Nivel } from '../../../../nivel/model/nivel';
import { Grado } from '../../../../grado/model/grado';

import { GradoService } from '../../../../../../providers/grado/grado.service';
import { NivelService } from 'src/providers/nivels/nivels.service';

@Component({
  selector: 'ngx-seccion-new',
  templateUrl: './seccion-new.component.html',
  styleUrls: ['./seccion-new.component.scss']
})
export class SeccionNewComponent implements OnInit {

  seccionForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  grados:Grado[];
  niveles:Nivel[];
  error:String;

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private gradoService:GradoService, private nivelService:NivelService) {

    this.seccionForm=this.formBuilder.group({
      nom_seccion:['',[Validators.required]],
      desc_seccion:['',[Validators.required]],
      grado_id1:['',[Validators.required]]
    });

   }

  ngOnInit(): void {
    this.getNiveles();
    this.getGradosOfNivel(18);
  }

  getNiveles(){
    this.nivelService.getNivel().subscribe( response=>{
      this.niveles = response.data;
      console.log("recuperacion de niveles");
      console.log(this.niveles);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  }

  getGradosOfNivel(id:number):void{
    console.log("asdfag");
    this.nivelService.getGrados(id).subscribe(response=>{
      this.grados=response.data;
      console.log(this.grados);
    });
  }

  public save():void{
    console.log("adshñljasdf");
    if (this.seccionForm.valid){
      this.activeModal.close(this.seccionForm.value);
    }
  }

}
