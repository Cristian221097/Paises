import { Component, OnInit } from '@angular/core';
import {PaisesServicio} from '../../Servicios/Paises.servicio';
import {Router,ActivatedRoute,Params, ParamMap} from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers:[PaisesServicio]
})
export class PaisComponent implements OnInit {
  public pais:any;

  constructor(
    private _PaisesServicio:PaisesServicio,
    private _router:Router,
    private _route:ActivatedRoute
   
  ) { 

  }

  ngOnInit(){

     this._route.paramMap.subscribe((params:ParamMap)=>{
        let nombre = params.get('nombre');

        this.getPais(nombre);

     });

         
  }

  getPais(nombre_pais:any){
    this._PaisesServicio.getPais(nombre_pais).subscribe(
      data =>{

        this.pais = data[0];

        
      },
      err=>
      {
        console.log(<any>err);
      }
      );
  }


}
