import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController} from '@ionic/angular';
import { CreatePostService } from '../services/create-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  createPostForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public toastController: ToastController, public createPostService: CreatePostService, private route: Router) {
      this.createPostForm = this.formBuilder.group({
          course: [null, [Validators.required, Validators.minLength(3)]],
          teacher: [null, [Validators.required, Validators.minLength(3)]],
          content: [null, [Validators.required, Validators.minLength(3)]],
          tag:[null],
      });
   }

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Post criado com sucesso!',
      duration: 2000,
      color: "secondary"
    });
    toast.present();
  }

  submitForm(form) {
      // console.log(form);
      // console.log(form.value);
     this.createPostService.createPost(form.value).subscribe(
       (res) => {console.log(res);
       this.route.navigate(['thread/', res.id]);;
       }, (err) => {console.log(err); })
  }

  ngOnInit() {
  }

}
