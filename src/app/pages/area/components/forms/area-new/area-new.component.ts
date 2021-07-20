import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Area } from '../../../model/area';
import { AreaService } from 'src/providers/area/area.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ngx-area-new',
  templateUrl: './area-new.component.html',
  styleUrls: ['./area-new.component.scss']
})
export class AreaNewComponent implements OnInit {
  public areas:Area[];
  public numareas:number;
  areaForm:FormGroup;
  error:string;
  num:number;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();

  

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, public areaService:AreaService) {
    this.areaForm=this.formBuilder.group({
      

      cod_area:['',[Validators.required]],
      nom_area:['',[Validators.required]]
    });
   }

  
  public save():void{
    if (this.areaForm.valid){
      this.activeModal.close(this.areaForm.value);
      
    }
  }

  getAreas():number{
    this.areaService.getArea().subscribe( response=>{
      this.areas = response.data;
      console.log("numero de areas");
      console.log(this.areas.length);
      const numareas=this.areas.length;
      console.log("recuperacion de niveles");
      console.log(this.areas);
      console.log("fin de recuperación de niveles");
  });
      console.log(this.numareas);
      return this.numareas;
      
  }

  ngOnInit(): void {
   
   
    this.numareas=this.getAreas();
    console.log("numero de areas");
    console.log(this.numareas);
  }

}
