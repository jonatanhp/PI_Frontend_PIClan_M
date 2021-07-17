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
import {NivelComponent} from "../../pages/nivel/container/nivel/nivel.component";
import {NivelNewComponent} from "../../pages/nivel/components/forms/nivel-new/nivel-new.component";
import {NivelListComponent} from "../../pages/nivel/components/list/nivel-list/nivel-list.component";
import {NivelsService} from "../../../providers/nivels/nivels.service";
import { AlumnoComponent } from 'src/app/pages/alumno/container/alumno/alumno.component';
import { AlumnoNewComponent } from 'src/app/pages/alumno/components/forms/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from 'src/app/pages/alumno/components/forms/alumno-edit/alumno-edit.component';
import { AlumnoListComponent } from 'src/app/pages/alumno/components/list/alumno-list/alumno-list.component';
import { AlumnoService } from 'src/providers/alumno/alumno.service';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
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
    NivelListComponent,
    AlumnoComponent,
    AlumnoNewComponent,
    AlumnoEditComponent,
    AlumnoListComponent
    
  ], providers: [NivelsService, AlumnoService]
})

export class AdminLayoutModule {
}
