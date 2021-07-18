import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-area-new',
  templateUrl: './area-new.component.html',
  styleUrls: ['./area-new.component.scss']
})
export class AreaNewComponent implements OnInit {

  areaForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal) {
    this.areaForm=this.formBuilder.group({
      cod_area:['',[Validators.required]],
      nom_area:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save():void{
    if (this.areaForm.valid){
      this.activeModal.close(this.areaForm.value);
    }
  }

}
