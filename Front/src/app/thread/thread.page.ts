import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ThreadService} from '../services/thread.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.page.html',
  styleUrls: ['./thread.page.scss'],
})
export class ThreadPage implements OnInit {

  original_post: [];

  commentForm: FormGroup;

  comments = [];

  post = {};
  postAuthor: string;
  postId: number;
  postUserId = -1;

  user;
  userId: number = -2;
  isAdmin = false;

  constructor(public formBuilder: FormBuilder, 
    private route: Router, 
    private activatedRoute: ActivatedRoute,
    public threadService: ThreadService,
    public authService: AuthService) {
    this.commentForm = this.formBuilder.group({
      text: [null]
    });
  }

  ngOnInit() {
    this.getDetails();
    this.getPost();
    this.getComments();
  }


  getDetails(){

    this.authService.getDetails().subscribe((res) => {
      console.log('getDetails: ', res);
      this.user = res;
      this.isAdmin = res.admin;
      this.userId = res.id;
    }, (err) => {
      console.log(err);
    });

    /* if( this.postId == this.user.id){
      console.log('post id: ', this.postId);
      console.log('user id: ', this.user.id);
      console.log(' id: ', this.userId);
      this.isAdmin = true;
    } */
  }

  getPost(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.threadService.getPost(id).subscribe((res)=>{
      this.post = res[0];
      this.postAuthor = res[0].user.name;
      this.postUserId = res[0].user.id;
      // console.log(this.post);
    }, (err) => {console.log(err);}
    );
    
  }

  deletePost() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('post deleted');
    this.threadService.deletePost(id).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/tabs/home']);
        //colocar um aviso ou toast de o post foi deletado
      }, (err) => {
        console.log(err.error);
      }
    );
  }

  editPost() {
    console.log('post edited');
    this.route.navigate(['/edit-post']);
  }

  getComments(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.threadService.getComments(id).subscribe((res)=>{
      this.comments = res;
      // this.postAuthor = res[0].user.name;
      console.log(this.comments);
    })

  }



  goToHome() {
    this.route.navigate(['/tabs/home']);
  }

  goBackToSearch(){
    this.route.navigate(['/tabs/tab2']);
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);


  }
  
}
