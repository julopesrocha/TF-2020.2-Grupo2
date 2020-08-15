import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    apiURL:string = 'http://localhost:8000/api/';

    httpHeaders: any = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

  constructor(public http: HttpClient) {}
  
  likePost(id): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + "likePost/" + id, this.httpHeaders);
  }

  dislikePost(id): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem("userToken");
    return this.http.get(this.apiURL + "dislikePost/" + id, this.httpHeaders);
  }

  getMostLikedPosts(): Observable<any> {
    return this.http.get(this.apiURL + "getMostLikedPosts/", this.httpHeaders);
  }

  getFollowingPosts(): Observable<any>{
    return this.http.get(this.apiURL + "getFollowingPosts/", this.httpHeaders);
  }


}
