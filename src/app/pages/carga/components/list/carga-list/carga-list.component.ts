import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Seccion } from '../../../../seccion/model/seccion';
import { Grado } from '../../../../grado/model/grado';
import { Nivel } from '../../../../nivel/model/nivel';
import { Curso } from 'src/app/pages/curso/model/curso';
import { Area } from 'src/app/pages/area/model/area';
import { Docente } from 'src/app/pages/docente/model/docente';
import { Carga } from '../../../model/carga';

@Component({
  selector: 'app-carga-list',
  templateUrl: './carga-list.component.html',
  styleUrls: ['./carga-list.component.css']
})
export class CargaListComponent implements OnInit {
  @Input() grados:Grado[];
  @Input() niveles:Nivel[];
  @Input() secciones:Seccion[];
  @Input() cursos:Curso[];
  @Input() areas:Area[];
  @Input() docentes:Docente[];
  @Input() cargas:Carga[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public newCarga():void{
    this.onNew.emit(true);
  }

  public editCarga(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

}
