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

  ionViewWillEnter(){
    this.getFollowingPosts();
  }

  ngOnInit() {
    this.getFollowingPosts();
  }

  getMostLikedPosts(){
    this.postService.getMostLikedPosts().subscribe((res)=>{
      this.posts = res;
      console.log(this.posts);
    }, (err) => {console.log(err);})
  }

  getFollowingPosts(){

    let userToken = localStorage.getItem('userToken');

    if(userToken){

      this.postService.getFollowingPosts().subscribe((res)=>{

        if(res.length == 0){
          this.getMostLikedPosts();
        }else{
          this.posts = res;
          console.log(this.posts);
        }

      }, (err) => {console.log(err);})
    }else{
      this.getMostLikedPosts();
      console.log('Usuário não está logado');
    }

  }

}
