import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, arg: any):any {
    if(arg == "" || arg.length < 3) return value;

      const resultadoPais = [];

      for(const pais of value){
        
        if(pais.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
         resultadoPais.push(pais);

        };


      };
    return resultadoPais;
  }

}
