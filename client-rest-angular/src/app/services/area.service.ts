import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../models/area';
import { global } from '../services/global';
@Injectable()
export class AreaService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }


  
  getAreas():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'area',{headers: headers});
  }
}
