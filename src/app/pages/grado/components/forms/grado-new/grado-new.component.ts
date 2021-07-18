import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Nivel } from '../../../../nivel/model/nivel';
import { NivelService } from 'src/providers/nivels/nivels.service';

@Component({
  selector: 'app-grado-new',
  templateUrl: './grado-new.component.html',
  styleUrls: ['./grado-new.component.scss']
})
export class GradoNewComponent implements OnInit {
  
  gradoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  niveles:Nivel[];
  error:String;
  

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private nivelService:NivelService) { 
    this.gradoForm=this.formBuilder.group({
      nom_grado:['',[Validators.required]],
      desc_grado:['',[Validators.required]],
      nivel_id:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    
    this.getNiveles();
  }

  getNiveles(){
    this.nivelService.getNivel().subscribe( response=>{
      this.niveles = response.data;
      console.log("recuperacion de niveles");
      console.log(this.niveles);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  }


  




  public save():void{
    if (this.gradoForm.valid){
      this.activeModal.close(this.gradoForm.value);
    }
  }

}
