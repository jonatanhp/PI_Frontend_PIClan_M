import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-docente-layout',
  templateUrl: './docente-layout.component.html',
  styleUrls: ['./docente-layout.component.scss']
})
export class DocenteLayoutComponent implements OnInit {
  menu = ROUTES;
  constructor() { }

  ngOnInit() {
  }

}
