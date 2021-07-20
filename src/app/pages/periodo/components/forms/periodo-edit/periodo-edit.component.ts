import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Periodo } from '../../../model/periodo';

@Component({
  selector: 'app-periodo-edit',
  templateUrl: './periodo-edit.component.html',
  styleUrls: ['./periodo-edit.component.css']
})
export class PeriodoEditComponent implements OnInit {

  @Input() periodo: Periodo;
  @Input() title: string;
  periodoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { 
    this.periodoForm = this.formBuilder.group({
      nom_periodo: [''],
      desc_periodo: [''],
      estado: [''],

    });
  }

  ngOnInit(): void {
    if (this.periodo) {
      this.periodoForm.patchValue({
        nom_periodo: this.periodo.nom_periodo,
        
        desc_periodo: this.periodo.desc_periodo,
        estado: this.periodo.estado
      });
    }
    console.log(this.periodo.nom_periodo);

  }

  public edit(): void {
    if (this.periodoForm.valid) {
      this.activeModal.close(this.periodoForm.value);
    }

  }


}
