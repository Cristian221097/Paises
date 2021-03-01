import { Component, OnInit } from '@angular/core';
import {PaisesServicio} from '../../Servicios/Paises.servicio';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers:[PaisesServicio]
})
export class PaisesComponent implements OnInit {
  public Paises:any;

  constructor(
    private _PaisesServicio:PaisesServicio
  ) { }

  BuscarPais="";

  ngOnInit(){
    this.getPaises();
  }

  getPaises(){
    this._PaisesServicio.getPaises().subscribe(data=>
      {

        
        this.Paises =data;
        


      },
      err=>
      {
        console.log(<any>err);
      }
      );

  }

}
