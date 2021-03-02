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
  public mostrarI:boolean;
  public mostrarF:boolean;
  public mostrarL:boolean;
  public mostrarM:boolean;
  public mostrarT:boolean;

  constructor(
    private _PaisesServicio:PaisesServicio,
    private _router:Router,
    private _route:ActivatedRoute
   
  ) { 
    this.mostrarI = true;
    this.mostrarF = false;
    this.mostrarL = false;
    this.mostrarM = false;
    this.mostrarT = false ;

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
        console.log(this.pais);
        

        
      },
      err=>
      {
        console.log(<any>err);
      }
      );
  }

  mostrarInformacion(){
    this.mostrarI = true;
    this.mostrarF = false;
    this.mostrarL = false;
    this.mostrarM = false;
    this.mostrarT = false;
  }

  mostrarFrontera(){
    this.mostrarF = true;
    this.mostrarI = false;
    this.mostrarL = false;
    this.mostrarM = false;
    this.mostrarT = false;
  }

  mostrarLenguaje(){
    this.mostrarL = true;
    this.mostrarF = false;
    this.mostrarI = false;
    this.mostrarM = false;
    this.mostrarT = false;
  }

  mostrarMoneda(){
    this.mostrarM = true;
    this.mostrarI = false;
    this.mostrarF = false;
    this.mostrarL = false;
    this.mostrarT = false;
  }

  mostrarTraduccion(){
    this.mostrarT = true;
    this.mostrarM = false;
    this.mostrarI = false;
    this.mostrarF = false;
    this.mostrarL = false;

  }


}
