import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Nivel } from '../../../../nivel/model/nivel';
import { Grado } from '../../../../grado/model/grado';

import { GradoService } from '../../../../../../providers/grado/grado.service';
import { NivelService } from 'src/providers/nivels/nivels.service';

@Component({
  selector: 'ngx-seccion-new',
  templateUrl: './seccion-new.component.html',
  styleUrls: ['./seccion-new.component.scss']
})
export class SeccionNewComponent implements OnInit {

  seccionForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  grados:Grado[];
  niveles:Nivel[];
  error:String;
  selected:HTMLSelectElement;
  public searchResult: Array<any> = [];
  public seriesList: Array<any> = [
    //truncated for brevity
    ];

  public searchInput: String = '';

  constructor(private formBuilder:FormBuilder, public activeModal: NgbActiveModal, private gradoService:GradoService, private nivelService:NivelService) {

    this.seccionForm=this.formBuilder.group({
      nom_seccion:['',[Validators.required]],
      desc_seccion:['',[Validators.required]],
      grado_id1:['',[Validators.required]],
      selected:['']
    });

   }

  ngOnInit(): void {
    this.getNiveles();
    this.getGradosOfNivel(18);
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

  getGradosOfNivel(event):void{
    console.log("asdfag");
    const  element = event.currentTarget as HTMLSelectElement
    //const t=
    const value = element.value
    
    //this.selected = value;
    console.log(value);
    //const value=event.target.value;
    //this.selected=value;
    this.nivelService.getGrados(parseInt(value)).subscribe(response=>{
      this.grados=response.data;
      console.log("ggg");
      console.log(this.grados);
    });
  }

  fetchSeries(event: any) {
    if (event.target.value === '') {
      return this.searchResult = [];
    }
    this.searchResult = this.grados.filter((grados) => {
      return grados.nom_grado.toLowerCase().startsWith(event.target.value.toLowerCase());
    })
  }

  public save():void{
    console.log("adshñljasdf");
    if (this.seccionForm.valid){
      this.activeModal.close(this.seccionForm.value);
    }
  }

}
