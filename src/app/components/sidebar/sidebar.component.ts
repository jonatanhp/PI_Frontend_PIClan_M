import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: NbMenuItem[] = [
  /*{path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: ''},
  {path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: ''},
  {path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: ''},
  {path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: ''},
  {path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: ''},
  {path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/niveles', title: 'Niveles', icon: 'ni-bullet-list-67 text-red', class: ''},
  {path: '/grados', title: 'Grados', icon: 'ni-bullet-list-67 text-red', class: ''},*/
  { title: 'Grupo', icon: 'layers-outline', children:[{title:'Grado', link:'/grados'},
                                                                  {title:'Nivel', link:'/niveles'},
                                                                  {title:'Seccion', link:'/secciones'}, ], },

  { title: 'Materia', icon: 'layers-outline', children:[{title:'Area', link:'/areas'},
                                                                  {title:'Curso', link:'/cursos'},
                                                                   ], },

  { title: 'Entidades', icon: 'layers-outline', children:[{title:'Alumnos', link:'/alumnos'},
                                                          {title:'Docentes', link:'/docentes'},
                                                          {title:'Representantes', link:'/representantes'},
                                                                    ], },
  { title: 'Matricula', icon: 'layers-outline', children:[{title:'Cargas', link:'/cargas'},
                                                          {title:'Carga Alumno', link:'/alumnoc'},
                                                          {title:'Periodo', link:'/periodos'},
                                                          {title:'Contratos', link:'/cmatriculas'},
                                                                              ], },
  /*{path: '/secciones', title: 'Secciones', icon: 'ni-bullet-list-67 text-red', class: ''},
  {path: '/products', title: 'Products', icon: 'ni-bullet-list-67 text-red', class: ''},
  {path: '/departamentos', title: 'Departamentos', icon: 'ni-bullet-list-67 text-red', class: ''},*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
