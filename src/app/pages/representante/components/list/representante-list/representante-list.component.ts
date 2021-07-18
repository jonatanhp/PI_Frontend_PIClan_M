import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Representante } from '../../../model/representante';

@Component({
  selector: 'app-representante-list',
  templateUrl: './representante-list.component.html',
  styleUrls: ['./representante-list.component.css']
})
export class RepresentanteListComponent implements OnInit {

  @Input() representantes:Representante[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public newRepresentante():void{
    this.onNew.emit(true);
  }

  public editRepresentante(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }


}
