import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Representante } from '../../../model/representante';

@Component({
  selector: 'app-representante-edit',
  templateUrl: './representante-edit.component.html',
  styleUrls: ['./representante-edit.component.css']
})
export class RepresentanteEditComponent implements OnInit {

  @Input() representante: Representante;
  @Input() title: string;
  representanteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.representanteForm = this.formBuilder.group({
      cod_representante: [''],
      user_id: ['']

    });
   }

  ngOnInit(): void {
    if (this.representante) {
      this.representanteForm.patchValue({
        cod_representante: this.representante.cod_representante,
        user_id: this.representante.user_id
      });
    }
  }

  public edit(): void {
    if (this.representanteForm.valid) {
      this.activeModal.close(this.representanteForm.value);
    }

  }

}
