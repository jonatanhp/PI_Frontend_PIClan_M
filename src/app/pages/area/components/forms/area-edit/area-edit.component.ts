import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Area } from '../../../model/area';

@Component({
  selector: 'ngx-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.scss']
})
export class AreaEditComponent implements OnInit {

  @Input() area: Area;
  @Input() title: string;
  areaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { 
    this.areaForm = this.formBuilder.group({
      cod_area: [''],
      nom_area: ['']

    });
  }

  ngOnInit(): void {
    if (this.area) {
      this.areaForm.patchValue({
        cod_area: this.area.cod_area,
        //console.log(this.area.nom_area);
        nom_area: this.area.nom_area
      });
    }
    console.log(this.area.nom_area);

  }

  public edit(): void {
    if (this.areaForm.valid) {
      this.activeModal.close(this.areaForm.value);
    }

  }


}
