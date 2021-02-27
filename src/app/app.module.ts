import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesComponent } from './Componentes/paises/paises.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { BusquedaPipe } from './Pipes/busqueda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    InicioComponent,
    BusquedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
