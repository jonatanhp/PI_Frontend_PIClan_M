import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbCardModule,
  NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule,
  NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, 
  NbSpinnerModule, NbDatepickerModule, DEFAULT_THEME,  } from '@nebular/theme';

import {NivelComponent} from "../../pages/nivel/container/nivel/nivel.component";
import {NivelNewComponent} from "../../pages/nivel/components/forms/nivel-new/nivel-new.component";
import {NivelEditComponent} from '../../pages/nivel/components/forms/nivel-edit/nivel-edit.component';
import {NivelListComponent} from "../../pages/nivel/components/list/nivel-list/nivel-list.component";
import { NivelGradosComponent} from '../../pages/nivel/components/forms/nivel-grados/nivel-grados.component';
import {NivelService} from "../../../providers/nivels/nivels.service";

import { AlumnoComponent } from 'src/app/pages/alumno/container/alumno/alumno.component';
import { AlumnoNewComponent } from 'src/app/pages/alumno/components/forms/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from 'src/app/pages/alumno/components/forms/alumno-edit/alumno-edit.component';
import { AlumnoListComponent } from 'src/app/pages/alumno/components/list/alumno-list/alumno-list.component';
import { AlumnoService } from 'src/providers/alumno/alumno.service';
import { AlumnoContratosComponent} from '../../pages/alumno/components/forms/alumno-contratos/alumno-contratos.component';


import { ThemeModule } from '../../@theme/theme.module';
import { LayoutService } from '../../@core/utils/layout.service';
import { GradoComponent } from 'src/app/pages/grado/container/grado/grado.component';
import { GradoNewComponent } from 'src/app/pages/grado/components/forms/grado-new/grado-new.component';
import { GradoEditComponent } from 'src/app/pages/grado/components/forms/grado-edit/grado-edit.component';
import { GradoListComponent } from 'src/app/pages/grado/components/list/grado-list/grado-list.component';
import { GradoService } from 'src/providers/grado/grado.service';

import { SeccionComponent } from 'src/app/pages/seccion/container/seccion/seccion.component';
import { SeccionNewComponent } from 'src/app/pages/seccion/components/forms/seccion-new/seccion-new.component';
import { SeccionEditComponent } from 'src/app/pages/seccion/components/forms/seccion-edit/seccion-edit.component';
import { SeccionListComponent } from 'src/app/pages/seccion/components/list/seccion-list/seccion-list.component';
import { SeccionService } from 'src/providers/seccion/seccion.service';

import { AreaComponent } from 'src/app/pages/area/container/area/area.component';
import { AreaNewComponent } from 'src/app/pages/area/components/forms/area-new/area-new.component';
import { AreaEditComponent } from 'src/app/pages/area/components/forms/area-edit/area-edit.component';
import { AreaCursosComponent} from 'src/app/pages/area/components/forms/area-cursos/area-cursos.component';
import { AreaListComponent } from 'src/app/pages/area/components/list/area-list/area-list.component';
import { AreaService } from 'src/providers/area/area.service';

import { CursoComponent } from 'src/app/pages/curso/container/curso/curso.component';
import { CursoNewComponent } from 'src/app/pages/curso/components/forms/curso-new/curso-new.component';
import { CursoEditComponent } from 'src/app/pages/curso/components/forms/curso-edit/curso-edit.component';
import { CursoListComponent } from 'src/app/pages/curso/components/list/curso-list/curso-list.component';
import { CursoService } from 'src/providers/curso/curso.service';

import { DocenteComponent } from 'src/app/pages/docente/container/docente/docente.component';
import { DocenteNewComponent } from 'src/app/pages/docente/components/forms/docente-new/docente-new.component';
import { DocenteEditComponent} from 'src/app/pages/docente/components/forms/docente-edit/docente-edit.component';
import { DocenteListComponent } from 'src/app/pages/docente/components/list/docente-list/docente-list.component';
import { DocenteService } from 'src/providers/docente/docente.service';

import { RepresentanteComponent } from 'src/app/pages/representante/container/representante/representante.component';
import { RepresentanteNewComponent } from 'src/app/pages/representante/components/forms/representante-new/representante-new.component';
import { RepresentanteEditComponent } from 'src/app/pages/representante/components/forms/representante-edit/representante-edit.component';
import { RepresentanteListComponent } from 'src/app/pages/representante/components/list/representante-list/representante-list.component';
import { RepresentanteService } from 'src/providers/representante/representante.service';

import { CargaComponent } from 'src/app/pages/carga/container/carga/carga.component';
import { CargaNewComponent } from 'src/app/pages/carga/components/forms/carga-new/carga-new.component';
import { CargaEditComponent } from 'src/app/pages/carga/components/forms/carga-edit/carga-edit.component';
import { CargaListComponent } from 'src/app/pages/carga/components/list/carga-list/carga-list.component';
import { CargaService } from 'src/providers/carga/carga.service';

import { AlumnoCComponent } from 'src/app/pages/alumnoC/container/alumno-c/alumno-c.component';
import { AlumnoCNewComponent } from 'src/app/pages/alumnoC/components/forms/alumno-c-new/alumno-c-new.component';
import { AlumnoCEditComponent } from 'src/app/pages/alumnoC/components/forms/alumno-c-edit/alumno-c-edit.component';
import { AlumnoCListComponent } from 'src/app/pages/alumnoC/components/list/alumno-c-list/alumno-c-list.component';
import { AlumnoCService } from 'src/providers/alumnoC/alumnoC.service';

import { PeriodoComponent } from 'src/app/pages/periodo/container/periodo/periodo.component';
import { PeriodoNewComponent } from 'src/app/pages/periodo/components/forms/periodo-new/periodo-new.component';
import { PeriodoEditComponent } from 'src/app/pages/periodo/components/forms/periodo-edit/periodo-edit.component';
import { PeriodoListComponent } from 'src/app/pages/periodo/components/list/periodo-list/periodo-list.component';
import { PeriodoService } from 'src/providers/periodo/periodo.service';

import { CmatriculaComponent } from 'src/app/pages/cmatricula/container/cmatricula/cmatricula.component';
import { CmatriculaNewComponent } from 'src/app/pages/cmatricula/components/forms/cmatricula-new/cmatricula-new.component';
import { CmatriculaEditComponent } from 'src/app/pages/cmatricula/components/forms/cmatricula-edit/cmatricula-edit.component';
import { CmatriculaListComponent } from 'src/app/pages/cmatricula/components/list/cmatricula-list/cmatricula-list.component';
import { CmatriculaService } from 'src/providers/cmatricula/cmatricula.service';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        NbLayoutModule,
        ThemeModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbCardModule,
        NbEvaIconsModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDialogModule.forRoot({ closeOnEsc: false, closeOnBackdropClick: false }),
        NbUserModule,
        NbActionsModule,
        NbContextMenuModule,
        NbIconModule,
        NbButtonModule,
        NbSelectModule,
        NbSpinnerModule,
        NbDatepickerModule.forRoot(),

        ThemeModule,


        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,

    NivelComponent,
    NivelNewComponent,
    NivelEditComponent,
    NivelListComponent,
    NivelGradosComponent,

    AlumnoComponent,
    AlumnoNewComponent,
    AlumnoEditComponent,
    AlumnoListComponent,
    AlumnoContratosComponent,

    GradoComponent,
    GradoNewComponent,
    GradoEditComponent,
    GradoListComponent,

    SeccionComponent,
    SeccionNewComponent,
    SeccionEditComponent,
    SeccionListComponent,

    AreaComponent,
    AreaNewComponent,
    AreaEditComponent,
    AreaCursosComponent,
    AreaListComponent,

    CursoComponent,
    CursoNewComponent,
    CursoEditComponent,
    CursoListComponent,

    DocenteComponent,
    DocenteNewComponent,
    DocenteEditComponent,
    DocenteListComponent,

    RepresentanteComponent,
    RepresentanteNewComponent,
    RepresentanteEditComponent,
    RepresentanteListComponent,

    CargaComponent,
    CargaNewComponent,
    CargaEditComponent,
    CargaListComponent,

    AlumnoCComponent,
    AlumnoCNewComponent,
    AlumnoCEditComponent,
    AlumnoCListComponent,

    PeriodoComponent,
    PeriodoNewComponent,
    PeriodoEditComponent,
    PeriodoListComponent,

    CmatriculaComponent,
    CmatriculaNewComponent,
    CmatriculaEditComponent,
    CmatriculaListComponent,
    
  ], providers: [NivelService, GradoService, SeccionService, AreaService, CursoService, AlumnoService,
    DocenteService, RepresentanteService, CargaService, AlumnoCService, PeriodoService, CmatriculaService,
     LayoutService, NbThemeModule.forRoot({
    name: 'default',
},
[DEFAULT_THEME],).providers]
})

export class AdminLayoutModule {
}
