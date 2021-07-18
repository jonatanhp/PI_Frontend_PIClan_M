import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-representante-new',
  templateUrl: './representante-new.component.html',
  styleUrls: ['./representante-new.component.css']
})
export class RepresentanteNewComponent implements OnInit {

  representanteForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) {
    this.representanteForm=this.formBuilder.group({
      cod_representante:['',[Validators.required]],
      user_id:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save():void{
    if (this.representanteForm.valid){
      this.activeModal.close(this.representanteForm.value);
    }
  }

}
