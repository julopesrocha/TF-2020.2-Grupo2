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
    this.getMostLikedPosts();
    this.getFollowingPosts();
  }

  ngOnInit() {
    this.getMostLikedPosts();
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
          return
        }else{
          this.posts = res;
          console.log(this.posts);
        }

      }, (err) => {console.log(err);})
    }else{
      console.log('Usuário não está logado');
    }

  }

}
