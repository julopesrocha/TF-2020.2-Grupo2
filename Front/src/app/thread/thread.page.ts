import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ThreadService} from '../services/thread.service';
import { AuthService } from '../services/auth/auth.service';
import { ToastController} from '@ionic/angular';

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
  postUserId = -1;

  user;
  userId: number = -2;
  isAdmin = false;

  constructor(public formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public threadService: ThreadService,
    public authService: AuthService,
    public toastController: ToastController) {
    this.commentForm = this.formBuilder.group({
      text: [null]
    });
  }

  ngOnInit() {
    this.getDetails();
    this.getPost();
    this.getComments();
  }

  async presentToast(message: string) {
   const toast = await this.toastController.create({
     message,
     duration: 2000,
     color: "secondary"
   });
   toast.present();
 }


  getDetails(){

    this.authService.getDetails().subscribe((res) => {
      this.user = res;
      this.isAdmin = res.admin;
      this.userId = res.id;
    }, (err) => {
      console.log(err);
    });
  }

  getPost(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.threadService.getPost(id).subscribe((res)=>{
      console.log(res);
      this.post = res[0];
      this.postAuthor = res[0].user.name;
      this.postUserId = res[0].user.id;
      // console.log(this.post);
    }, (err) => {console.log(err);}
    );

  }

  deletePost() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.threadService.deletePost(id).subscribe(
      (res) => {
        console.log(res);
        console.log('post deleted');
        this.route.navigate(['/tabs/home']);
        this.presentToast('Post deletado!');
      }, (err) => {
        console.log(err.error);
        this.presentToast('Não foi possível deletar o post.');
      }
    );
  }

  editPost() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('post edited');
    this.route.navigate(['/edit-post', id]);
  }

  getComments(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.threadService.getComments(id).subscribe((res)=>{
      this.comments = res;
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
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      this.threadService.createComment(id, form.value).subscribe(
          (res)=>{
              console.log(res);
              this.commentForm.reset();
              this.comments = res;
              this.presentToast('Comentário realizado com sucesso!');
          }, (err) => {console.log(err);
             this.presentToast('Não foi possível comentar, tente novamente.');}
      );
  }

  followUser(id){
    this.authService.followUser(id).subscribe((res) => {
      console.log(res);
      this.presentToast('Usuário seguido!');
    }, (err) => {
      console.log(err.error);
    });
  }

}
