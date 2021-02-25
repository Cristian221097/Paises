import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './Componentes/inicio/inicio.component';
import {PaisesComponent} from './Componentes/paises/paises.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'Paises',component:PaisesComponent},
  {path:'Inicio',component:InicioComponent},
  {path:'**',component:InicioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
