import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() user: string;
  @Input() text: string;
  @Input() likes: number;
  @Input() dislikes: number;
  @Input() id: number;

  constructor(public postService: PostService) { }

  ngOnInit() {}


//this.postService.likePost()
  likePost() {
    this.postService.likePost(this.id).subscribe((res)=>{
      console.log(res);
    }, (err) => {console.log(err); })
  }

  dislikePost(){
    this.postService.dislikePost(this.id).subscribe((res)=>{
      console.log(res);
    }, (err) => {console.log(err); })
  }

  follow_user(){

  }

  view_thread(){

  }

}
