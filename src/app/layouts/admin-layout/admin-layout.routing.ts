import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {NivelComponent} from '../../pages/nivel/container/nivel/nivel.component';
import { AlumnoComponent } from 'src/app/pages/alumno/container/alumno/alumno.component';
import { GradoComponent} from '../../pages/grado/container/grado/grado.component';
import { SeccionComponent} from '../../pages/seccion/container/seccion/seccion.component';
import { AreaComponent} from '../../pages/area/container/area/area.component';
import { CursoComponent} from '../../pages/curso/container/curso/curso.component';
import {DocenteComponent} from '../../pages/docente/container/docente/docente.component';
import { RepresentanteComponent } from '../../pages/representante/container/representante/representante.component';
import { CargaComponent} from '../../pages/carga/container/carga/carga.component';
import { AlumnoCComponent} from '../../pages/alumnoC/container/alumno-c/alumno-c.component';
import { PeriodoComponent} from '../../pages/periodo/container/periodo/periodo.component';
import {CmatriculaComponent} from '../../pages/cmatricula/container/cmatricula/cmatricula.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path: 'niveles',         component:NivelComponent},
    {path: 'alumnos',         component:AlumnoComponent},
    {path: 'grados',         component:GradoComponent},
    {path: 'secciones',         component:SeccionComponent},
    {path: 'areas',         component:AreaComponent},
    {path: 'cursos',         component:CursoComponent},
    {path: 'docentes',         component:DocenteComponent},
    {path: 'representantes',         component:RepresentanteComponent},
    {path: 'cargas',         component:CargaComponent},
    {path: 'alumnoc',         component:AlumnoCComponent},
    {path: 'periodos',         component:PeriodoComponent},
    {path: 'cmatriculas',         component:CmatriculaComponent}
];
