import { PageResponse } from './app.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  // To fetch the meaning of a word.
  public getUsers(pageNumber: number | string): Observable<PageResponse> {
    return this.http.get<PageResponse>('https://reqres.in/api/users?page=' + pageNumber);
  }
}
