import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { global } from '../services/global';
@Injectable()
export class EmpleadoService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  create(empleado:any):Observable<any>{
    
    let json= JSON.stringify(empleado);

    let params= "json="+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'empleado',params,{headers: headers});
  }

 
  getEmpleados():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'empleado',{headers: headers});
  }

  delete(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.delete(this.url+'empleado/'+id,{headers: headers});
  }
}
