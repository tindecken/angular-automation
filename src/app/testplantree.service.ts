import { Injectable } from '@angular/core';
import { TestSuite } from './classes/testsuite'
import { TestGroup } from './classes/testgroup'
import { TestCase } from './classes/testcase'
import { TestClient } from './classes/testclient'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { Category } from './classes/category';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { TreeNode } from 'primeng/components/common/treenode';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class TestplantreeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getTestSuitesTree(): Observable<TestSuite[]> {
    return this.http.get<TestSuite[]>(`${this.url}`)
  }
  getCategories(): Observable<Category[]> {
    var headers = {
      headers: new HttpHeaders()
        .set('authorization', localStorage.token)
    }
    return this.http.get<Category[]>(`${this.url}/categories/testsuites/processed`, headers)
      .pipe(
        map(response => {
          return plainToClass(Category, response)
        })
      )
  }
  getSelectedNode(treeNode): any {
    let url = `${this.url}/`
    let headers = {
      headers: new HttpHeaders()
        .set('authorization', localStorage.token)
    }
    switch (treeNode.type) {
      case "category":
        url += `categories/${treeNode.id}`
        return this.http.get<Category>(`${url}`, headers)
          .pipe(
            map(response => {
              return plainToClass(Category, response)
            })
          )
      case "testsuite":
        url += `testsuites/${treeNode.id}`
        return this.http.get<TestSuite>(`${url}`, headers)
          .pipe(
            map(response => {
              return plainToClass(TestSuite, response)
            })
          )
      case "testgroup":
        url += `testgroups/${treeNode.id}`
        return this.http.get<TestGroup>(`${url}`, headers)
          .pipe(
            map(response => {
              return plainToClass(TestGroup, response)
            })
          )
      case "testcase":
        url += `testcases/${treeNode.id}`
        return this.http.get<TestCase>(`${url}`, headers)
          .pipe(
            map(response => {
              return plainToClass(TestCase, response)
            })
          )
    }
  }
  createTestSuite(payload: any){
    console.log('payload', payload)
    let headers = {
      headers: new HttpHeaders()
        .set('authorization', localStorage.token)
    }
    return this.http.post<TestSuite>(`${this.url}/testsuites`, {
      name: payload.name,
      description: payload.description,
      workId: payload.workId,
      categoryId: payload.categoryId
    }, headers)
    .pipe(this.handleError())
  }
}
