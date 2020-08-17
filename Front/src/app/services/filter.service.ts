import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  apiURL: string = 'http://localhost:8000/api/'

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  filterPosts(form): Observable<any>{
    return this.http.post(this.apiURL + 'filterPosts', form, this.httpHeaders );
  }

  filterUsers(form): Observable<any>{
    return this.http.post(this.apiURL + 'filterUsers', form, this.httpHeaders );
  }

  filterAuthUsers(form): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.post(this.apiURL + 'filterAuthUsers', form, this.httpHeaders );
  }

}
