import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    apiURL:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) {}

}
