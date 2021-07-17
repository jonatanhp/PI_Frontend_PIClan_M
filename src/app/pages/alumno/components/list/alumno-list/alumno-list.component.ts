import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../model/alumno';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  @Input() alumnos:Alumno[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public newAlumno():void{
    this.onNew.emit(true);
  }

  public editAlumno(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

}
