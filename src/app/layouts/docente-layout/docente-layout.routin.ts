import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
//import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
//import {NivelComponent} from '../../pages/nivel/container/nivel/nivel.component';
import { AlumnoComponent } from 'src/app/pages/alumno/container/alumno/alumno.component';

export const DocenteLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    //{ path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
   // {path: 'niveles',         component:NivelComponent},
    {path: 'alumnos',         component:AlumnoComponent}
];