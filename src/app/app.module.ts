import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesComponent } from './Componentes/paises/paises.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { BusquedaPipe } from './Pipes/busqueda.pipe';
import { PaisComponent } from './Componentes/pais/pais.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    InicioComponent,
    BusquedaPipe,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
