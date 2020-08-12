import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  apiURL:string = 'http://localhost:8000/api/';

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  register(form): Observable<any> {
    return this.http.post(this.apiURL + 'register', form, this.httpHeaders);
  }

  login(form): Observable<any> {
    return this.http.post(this.apiURL + 'login', form, this.httpHeaders);
  }

  getDetails(): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + 'getDetails', this.httpHeaders);
  }

  logout(): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + 'logout', this.httpHeaders);
  }

  deleteUser(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.delete(this.apiURL + 'deleteUser/' + id, this.httpHeaders);
  }

}
