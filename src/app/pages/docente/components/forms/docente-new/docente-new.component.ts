import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-docente-new',
  templateUrl: './docente-new.component.html',
  styleUrls: ['./docente-new.component.css']
})
export class DocenteNewComponent implements OnInit {

  docenteForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) {
    this.docenteForm=this.formBuilder.group({
      cod_docente:['',[Validators.required]],
      user_id:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save():void{
    if (this.docenteForm.valid){
      this.activeModal.close(this.docenteForm.value);
    }
  }


}
