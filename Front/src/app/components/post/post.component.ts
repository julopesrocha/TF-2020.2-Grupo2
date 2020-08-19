import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() teacher: string;
  @Input() user: string;
  @Input() text: string;
  @Input() tag: string;
  @Input() likes: number;
  @Input() dislikes: number;
  @Input() id: number;


  constructor(public postService: PostService, private route: Router, public toastController: ToastController) { }

  ngOnInit() {}

  async presentToast(message: string) {
   const toast = await this.toastController.create({
     message,
     duration: 2000,
     color: "secondary"
   });
   toast.present();
 }

//this.postService.likePost()
  likePost() {
    this.postService.likePost(this.id).subscribe((res)=>{
      this.likes = res;
    }, (err) => {console.log(err);
       this.presentToast('Não foi possível curtir o post.'); })

  }

  dislikePost(){
    this.postService.dislikePost(this.id).subscribe((res)=>{
      this.likes = res;
    }, (err) => {console.log(err);
       this.presentToast('Não foi possível descurtir o post.'); })
  }

  /* follow_user(){
    this.postService.followUser(this.id).subscribe((res)=>{
      console.log(res);
    }, (err) => {console.log(err);})
  } */

  view_thread(){
    this.route.navigate(['/thread', this.id]);
  }

}
