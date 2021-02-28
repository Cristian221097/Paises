import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PaisesServicio{

    public url:string;

    constructor(
        private http:HttpClient
    ){
        this.url = "https://restcountries.eu/rest/v2/all";
    }

    getPaises():Observable<any>{    
     

        return this.http.get(this.url);

    }

    getPais(nombre_pais:any):Observable<any>{
        
        return this.http.get("https://restcountries.eu/rest/v2/name/"+nombre_pais+"?fullText=true");

    }


}