import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(public http: HttpClient) { }

  apiURL:string = 'http://localhost:8000/api/';

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }



  getPost(id): Observable<any>{
    return this.http.get(this.apiURL + 'getPost/' + id, this.httpHeaders);
  }

  getComments(id): Observable<any>{
    return this.http.get(this.apiURL + 'listCommentsFromPost/' + id, this.httpHeaders);
  }

  editPost(form, id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.put(this.apiURL + "editPost/" + id,form, this.httpHeaders);
  }

  deletePost(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.delete(this.apiURL + "deletePost/" + id, this.httpHeaders);
  }

  createComment(form, id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.post(this.apiURL + "createComment/" + id,form, this.httpHeaders);
  }

}
