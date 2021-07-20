import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-periodo-new',
  templateUrl: './periodo-new.component.html',
  styleUrls: ['./periodo-new.component.css']
})
export class PeriodoNewComponent implements OnInit {

  periodoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) {
    this.periodoForm=this.formBuilder.group({
      nom_periodo:['',[Validators.required]],
      desc_periodo:['',[Validators.required]],
      estado:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save():void{
    if (this.periodoForm.valid){
      this.activeModal.close(this.periodoForm.value);
    }
  }
}
