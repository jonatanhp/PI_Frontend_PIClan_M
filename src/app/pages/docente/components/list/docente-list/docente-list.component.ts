import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Docente } from '../../../model/docente';

@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css']
})
export class DocenteListComponent implements OnInit {

  @Input() docentes:Docente[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public newDocente():void{
    this.onNew.emit(true);
  }

  public editDocente(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }


}
