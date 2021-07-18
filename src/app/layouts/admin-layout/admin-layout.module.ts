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
    
  ], providers: [NivelService, GradoService, SeccionService, AreaService, CursoService, AlumnoService,
    DocenteService, RepresentanteService, LayoutService, NbThemeModule.forRoot({
    name: 'default',
},
[DEFAULT_THEME],).providers]
})

export class AdminLayoutModule {
}
