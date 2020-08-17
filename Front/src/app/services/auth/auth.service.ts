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

  editProfile(form): Observable<any>{
      this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
      return this.http.put(this.apiURL + 'editProfile', form, this.httpHeaders);
  }

  logout(): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + 'logout', this.httpHeaders);
  }

  deleteUser(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.delete(this.apiURL + 'deleteUser/' + id, this.httpHeaders);
  }

  followUser(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + 'followUser/' + id, this.httpHeaders);
  }

  listUserFollowing(): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + 'listUserFollowing', this.httpHeaders);
  }

  unfollowUser(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + 'unfollowUser/' + id, this.httpHeaders);
  }


}
