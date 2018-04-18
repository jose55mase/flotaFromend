
/* ----------------------------- IMPORTACIONES ----------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as jquery from 'jquery';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import {
  MatExpansionModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

/* ////----------------------------- IMPORTACIONES ------------------------------------ */

/* ----------------------------- COMPONENTES ----------------------------------------- */

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu';
import { UsuarioComponent } from './moduloUsuario/usuario.component';
import { UsuarioServicios } from './servicios/usuarioServicios';


import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';


//import { UsuariosComponent } from './usuarios.component/usuarios.component';




/* /////----------------------------- COMPONENTES ------------------------------------ */


/* ----------------------------- RUTAS ------------------------------------ */


const routes: Routes = [  
  
  { path : 'usuarios-rutas', component : UsuarioComponent }
  
];

/* ////----------------------------- RUTAS ------------------------------------ */


@NgModule({
  declarations: [
     AppComponent,
     MenuComponent,
     UsuarioComponent,
     UsuariosComponent





  ],

  exports: [
    
    
  ],

  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,

    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  /* ----------------------------- VENTAS MODALES ------------------------------------ */

  entryComponents: [
  
  ],

  /* ///----------------------------- VENTAS MODALES ------------------------------------ */

  providers: [ UsuarioServicios, UsuarioService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }
export class PizzaPartyAppModule { }
