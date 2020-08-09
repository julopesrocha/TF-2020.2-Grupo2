import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
    apiURL:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) {}

      createPost(body):Observable<any>{
          return this.http.post(this.apiURL + 'createPost/'+ body);
      }
}
