import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Area } from '../../../model/area';

@Component({
  selector: 'ngx-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {

  @Input() areas:Area[];
  @Output() onNew:EventEmitter<boolean>=new EventEmitter();
  @Output() onEdit:EventEmitter<number>=new EventEmitter();
  @Output() onDelete:EventEmitter<number>=new EventEmitter();
  @Output() cursosOfArea:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  public newArea():void{
    this.onNew.emit(true);
  }

  public editArea(id:number):void{
    this.onEdit.emit(id);
  }

  public delete(id:number):void{
    this.onDelete.emit(id);
  }

  public searchCursosOfArea(id:number){
    this.cursosOfArea.emit(id);
  }
}
