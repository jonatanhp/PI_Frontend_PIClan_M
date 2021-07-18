import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Nivel } from '../../../../nivel/model/nivel';

import { Grado } from '../../../model/grado';
import { NivelService } from 'src/providers/nivels/nivels.service';

@Component({
  selector: 'ngx-grado-edit',
  templateUrl: './grado-edit.component.html',
  styleUrls: ['./grado-edit.component.scss']
})
export class GradoEditComponent implements OnInit {

  @Input() grado: Grado;
  @Input() title: string;
  gradoForm: FormGroup;
  niveles:Nivel[];
  error:string;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private nivelService:NivelService) { 
    this.gradoForm = this.formBuilder.group({
      nom_grado: [''],
      desc_grado: [''],
      nivel_id: ['']

    });
  }

  ngOnInit(): void {
    this.getNiveles();
    if (this.grado) {
      this.gradoForm.patchValue({
        nom_grado: this.grado.nom_grado,
        //console.log(this.nivel.nom_nivel);
        desc_grado: this.grado.desc_grado,
        nivel_id: this.grado.nivel_id
      });
    }
    

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


  public edit(): void {
    if (this.gradoForm.valid) {
      this.activeModal.close(this.gradoForm.value);
    }

  }

}
