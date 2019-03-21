import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Imobile} from './mobile'
@Injectable({
  providedIn: 'root'
})
export class SaveImageService {
  urlObj: { image: string; };

  constructor(private _http:HttpClient) { }
  
  public saveUrl(url,userName):Observable<Imobile>{
    this.urlObj = {
      image : url 
    }
    console.log(this.urlObj, 'esrdtfg');
    return  this._http.post<Imobile>('http://localhost:5000/api/uploadImage/'+userName, this.urlObj);
  }
} 
