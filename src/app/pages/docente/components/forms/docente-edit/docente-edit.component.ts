import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../../../model/docente';

@Component({
  selector: 'app-docente-edit',
  templateUrl: './docente-edit.component.html',
  styleUrls: ['./docente-edit.component.css']
})
export class DocenteEditComponent implements OnInit {

  @Input() docente: Docente;
  @Input() title: string;
  docenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.docenteForm = this.formBuilder.group({
      cod_docente: [''],
      user_id: ['']

    });
   }

  ngOnInit(): void {
    if (this.docente) {
      this.docenteForm.patchValue({
        cod_docente: this.docente.cod_docente,
        user_id: this.docente.user_id
      });
    }
  }

  public edit(): void {
    if (this.docenteForm.valid) {
      this.activeModal.close(this.docenteForm.value);
    }

  }

}
