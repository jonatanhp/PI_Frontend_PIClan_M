import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  menu = ROUTES;
  constructor() { }

  ngOnInit() {
  }

}
