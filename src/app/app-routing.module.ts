import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './Componentes/inicio/inicio.component';
import {PaisesComponent} from './Componentes/paises/paises.component';
import {PaisComponent} from './Componentes/pais/pais.component';
import {FronterasComponent} from './Componentes/fronteras/fronteras.component';
import {InformacionComponent} from './Componentes/informacion/informacion.component';
import {LeguanjesComponent} from './Componentes/leguanjes/leguanjes.component';
import {MonedasComponent} from './Componentes/monedas/monedas.component';
import {TraduccionesComponent} from './Componentes/traducciones/traducciones.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'Paises',component:PaisesComponent},
  {path:'Inicio',component:InicioComponent},
  {path:'Pais/:nombre',component:PaisComponent,children:[

    {path:'Informacion',component:InformacionComponent},
    {path:'Fronteras',component:FronterasComponent},
    {path:'Lenguajes',component:LeguanjesComponent},
    {path:'Monedas',component:MonedasComponent},
    {path:'Traducciones',component:TraduccionesComponent},

  ]},
  {path:'**',component:InicioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
