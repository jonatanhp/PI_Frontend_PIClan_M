import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alumno-new',
  templateUrl: './alumno-new.component.html',
  styleUrls: ['./alumno-new.component.css']
})
export class AlumnoNewComponent implements OnInit {
  alumnoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) {
    this.alumnoForm=this.formBuilder.group({
      cod_alumno:['',[Validators.required]],
      user_id:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save():void{
    if (this.alumnoForm.valid){
      this.activeModal.close(this.alumnoForm.value);
    }
  }

}
