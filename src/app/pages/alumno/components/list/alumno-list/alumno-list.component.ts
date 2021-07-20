import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../model/alumno';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  @Input() alumnos:Alumno[];
  @Input() alumno:Alumno;
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();
  @Output() matricularAlumno:EventEmitter<object>=new EventEmitter();
  @Output() contratosOfAlumno:EventEmitter<number>=new EventEmitter();
  lista:Alumno[];

  constructor() { }

  ngOnInit(): void {
  }

  public  hola():void {
    
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
  public onNewMatricula(alumno : Alumno): void {
    this.matricularAlumno.emit(alumno);
    //console.log(alumno);
  }

  public getContratosOfAlumno(id:number){
    this.contratosOfAlumno.emit(id);
  }

}
