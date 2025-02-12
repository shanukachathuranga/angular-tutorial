import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = environment.url;
  constructor(private _http:HttpClient) { }

  public getAllTodos():Observable<any>{
    return this._http.get(`${this.baseUrl}/todos`);
  }

  public getCustomerData(id:any):Observable<any>{
    return this._http.get(`${this.baseUrl}/todos/${id}`);
  }


}
