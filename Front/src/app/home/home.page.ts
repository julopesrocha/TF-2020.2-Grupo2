import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.getMostLikedPosts();
  }

  getMostLikedPosts(){
    this.postService.getMostLikedPosts().subscribe((res)=>{
      this.posts = res;
      console.log(this.posts);
    }, (err) => {console.log(err);})
  }

}
