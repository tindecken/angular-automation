import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string
  httpOptions: Object

  constructor() {
    this.url = 'http://localhost:3000/api';
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  }

  handleError() {
    return catchError((res) => {
      return of(res.error);
    });
  }
}
