import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  apiURL: string = 'http://localhost:8000/api/';

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor(public http: HttpClient) { }

  createPost(form): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.post(this.apiURL + 'createPost', form, this.httpHeaders);
  }
}
