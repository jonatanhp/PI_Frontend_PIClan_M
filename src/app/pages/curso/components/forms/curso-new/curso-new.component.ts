import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Area } from '../../../../area/model/area';
import { AreaService } from '../../../../../../providers/area/area.service';

@Component({
  selector: 'ngx-curso-new',
  templateUrl: './curso-new.component.html',
  styleUrls: ['./curso-new.component.scss']
})
export class CursoNewComponent implements OnInit {

  cursoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  areas:Area[];
  error:String;
  

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private areaService:AreaService) { 
    this.cursoForm=this.formBuilder.group({
      cod_curso:['',[Validators.required]],
      nom_curso:['',[Validators.required]],
      nota_max:['',[Validators.required]],
      num_horas_p:['',[Validators.required]],
      num_horas_np:['',[Validators.required]],
      estado_curso:['',[Validators.required]],
      area_id:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    
    this.getAreas();
  }

  getAreas(){
    this.areaService.getArea().subscribe( response=>{
      this.areas = response.data;
      console.log("recuperacion de areas");
      console.log(this.areas);
      console.log("fin de recuperación de areas");
  }, error => {
    this.error = error; 

  });
  }


  




  public save():void{
    if (this.cursoForm.valid){
      this.activeModal.close(this.cursoForm.value);
    }
  }
}
