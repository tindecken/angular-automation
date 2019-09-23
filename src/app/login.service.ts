import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  constructor(private http: HttpClient) { 
    super()
  }

  login(form: any){
    return this.http.post(this.url + '/users/authenticate', form, this.httpOptions).pipe(this.handleError());
  }
}
