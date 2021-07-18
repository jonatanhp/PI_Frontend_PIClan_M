import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Curso} from '../../../model/curso';
import { Area } from '../../../../area/model/area';
import { AreaService } from '../../../../../../providers/area/area.service';

@Component({
  selector: 'ngx-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.scss']
})
export class CursoEditComponent implements OnInit {

  @Input() curso: Curso;
  @Input() title: string;
  cursoForm: FormGroup;
  areas:Area[];
  error:string;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private areaService:AreaService) { 
    this.cursoForm = this.formBuilder.group({
      cod_curso: [''],
      nom_curso: [''],
      nota_max: [''],
      num_horas_p: [''],
      num_horas_np: [''],
      estado_curso: [''],
      area_id: ['']

    });
  }

  ngOnInit(): void {
    this.getAreaes();
    if (this.curso) {
      this.cursoForm.patchValue({
        cod_curso: this.curso.cod_curso,
        nom_curso: this.curso.nom_curso,
        nota_max: this.curso.nota_max,
        num_horas_p: this.curso.num_horas_p,
        num_horas_np: this.curso.num_horas_np,
        estado_curso: this.curso.estado_curso,
        area_id: this.curso.area_id
      });
    }
    

  }


  getAreaes(){
    this.areaService.getArea().subscribe( response=>{
      this.areas = response.data;
      console.log("recuperacion de areas");
      console.log(this.areas);
      console.log("fin de recuperación de areas");
  }, error => {
    this.error = error; 

  });
  }


  public edit(): void {
    if (this.cursoForm.valid) {
      this.activeModal.close(this.cursoForm.value);
    }

  }

}
