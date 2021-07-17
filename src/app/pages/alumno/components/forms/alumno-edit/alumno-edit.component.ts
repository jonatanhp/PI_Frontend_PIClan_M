import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Alumno } from '../../../model/alumno';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {

  @Input() alumno: Alumno;
  @Input() title: string;
  alumnoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.alumnoForm = this.formBuilder.group({
      cod_alumno: [''],
      user_id: ['']

    });
   }

  ngOnInit(): void {
    if (this.alumno) {
      this.alumnoForm.patchValue({
        cod_alumno: this.alumno.cod_alumno,
        user_id: this.alumno.user_id
      });
    }
  }

  public edit(): void {
    if (this.alumnoForm.valid) {
      this.activeModal.close(this.alumnoForm.value);
    }

  }

}
