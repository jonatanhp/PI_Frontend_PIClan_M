import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {DocenteLayoutRoutes} from './docente-layout.routin';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
//import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbCardModule,
  NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule,
  NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, 
  NbSpinnerModule, NbDatepickerModule, DEFAULT_THEME,  } from '@nebular/theme';

//import {NivelComponent} from "../../pages/nivel/container/nivel/nivel.component";
import {NivelNewComponent} from "../../pages/nivel/components/forms/nivel-new/nivel-new.component";
import {NivelListComponent} from "../../pages/nivel/components/list/nivel-list/nivel-list.component";
import {NivelService} from "../../../providers/nivels/nivels.service";
//import { AlumnoComponent } from 'src/app/pages/alumno/container/alumno/alumno.component';
import { AlumnoNewComponent } from 'src/app/pages/alumno/components/forms/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from 'src/app/pages/alumno/components/forms/alumno-edit/alumno-edit.component';
import { AlumnoListComponent } from 'src/app/pages/alumno/components/list/alumno-list/alumno-list.component';
import { AlumnoService } from 'src/providers/alumno/alumno.service';


import { ThemeModule } from '../../@theme/theme.module';
import { LayoutService } from '../../@core/utils/layout.service';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DocenteLayoutRoutes),
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
    //DashboardComponent,
    //UserProfileComponent,
    //TablesComponent,
    //IconsComponent,
    //MapsComponent,
    //NivelComponent,
    /*NivelNewComponent,
    NivelListComponent,
    AlumnoComponent,
    AlumnoNewComponent,
    AlumnoEditComponent,
    AlumnoListComponent*/
    
  ], providers: [NivelService, AlumnoService, LayoutService, NbThemeModule.forRoot({
    name: 'default',
},
[DEFAULT_THEME],).providers]
})

export class DocenteLayoutModule {
}
