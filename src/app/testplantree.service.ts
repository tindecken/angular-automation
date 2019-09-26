import { Injectable } from '@angular/core';
import { TestSuite } from './classes/testsuite'
import { TestGroup } from './classes/testgroup'
import { TestCase } from './classes/testcase'
import { TestClient } from './classes/testclient'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { Category } from './classes/category';

@Injectable({
  providedIn: 'root'
})
export class TestplantreeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getTestSuitesTree(): Observable<TestSuite[]>{
    return this.http.get<TestSuite[]>(`${this.url}`)
  }
  getCategories(): Observable<Category[]>{
    var headers = {
      headers: new HttpHeaders()
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZjRjMjFkZjM2NDIxNTJhOGQwZTBlNCIsIm5hbWUiOiJ0aW5kZWNrZW4iLCJlbWFpbCI6InRpbmRlY2tlbkBnbWFpbC5jb20iLCJzY29wZSI6ImFkbWluIiwiaWF0IjoxNTY5NDcwMjk0LCJleHAiOjE1Njk1MTM0OTR9.e6vLqcQlDieBfwc6Wjoo08aiJAN2OYH6mmPstbWaJ6k')
    }
    return this.http.get<Category[]>(`${this.url}/categories/testsuites/processed`, headers)
  }
}
