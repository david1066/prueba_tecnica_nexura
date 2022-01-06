import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { global } from '../services/global';
@Injectable()
export class RolService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  
  getRoles():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'rol',{headers: headers});
  }
}
