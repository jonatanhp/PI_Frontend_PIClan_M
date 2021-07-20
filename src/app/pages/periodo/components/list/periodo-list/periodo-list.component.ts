import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Periodo } from '../../../model/periodo';

@Component({
  selector: 'app-periodo-list',
  templateUrl: './periodo-list.component.html',
  styleUrls: ['./periodo-list.component.css']
})
export class PeriodoListComponent implements OnInit {

  @Input() periodos:Periodo[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<bigint>=new EventEmitter();
  @Output() onDelete:EventEmitter<bigint>=new EventEmitter();
  @Output() gradosOfPeriodo:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  public newPeriodo():void{
    this.onNew.emit(true);
  }

  public editPeriodo(id:bigint):void{
    this.onEdit.emit(id);
  }

  public delete(id:bigint):void{
    this.onDelete.emit(id);
  }

  public searchGradosOfPeriodo(id:number){
    this.gradosOfPeriodo.emit(id);
  }

}
