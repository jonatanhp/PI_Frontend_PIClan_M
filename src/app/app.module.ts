import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NbThemeModule, NbLayoutModule, NbCardModule,
  NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule,
  NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from './@theme/theme.module';
import { AlumnoCargasComponent } from './pages/alumno/components/forms/alumno-cargas/alumno-cargas.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
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
    ThemeModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AlumnoCargasComponent,
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
