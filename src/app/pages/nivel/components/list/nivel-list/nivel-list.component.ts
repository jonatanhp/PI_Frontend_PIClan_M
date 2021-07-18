import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Nivel} from '../../../model/nivel';
@Component({
  selector: 'app-nivel-list',
  templateUrl: './nivel-list.component.html',
  styleUrls: ['./nivel-list.component.css']
})
export class NivelListComponent implements OnInit {
  @Input() niveles:Nivel[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();
  @Output() gradosOfNivel:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  public newNivel():void{
    this.onNew.emit(true);
  }

  public editNivel(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

  public searchGradosOfNivel(id:number){
    this.gradosOfNivel.emit(id);
  }

}
