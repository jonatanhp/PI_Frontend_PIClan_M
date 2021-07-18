import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../../model/curso';
import { Area } from '../../../../area/model/area';

@Component({
  selector: 'ngx-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  @Input() cursos:Curso[];
  @Input() areas:Area[];
  @Input() nivelt:Curso[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  public newCurso():void{
    this.onNew.emit(true);
  }

  public editCurso(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

  


}
