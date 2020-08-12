import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController} from '@ionic/angular';
import { CreatePostService } from '../services/create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

createPostForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public toastController: ToastController, public createPostService: CreatePostService) {
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
      duration: 2000
    });
    toast.present();
  }

  submitForm(form) {
      // console.log(form);
      // console.log(form.value);
     this.createPostService.createPost(form.value).subscribe(
       (res) => {console.log(res);
       }, (err) => {console.log(err); })

      // window.location.href="/tabs/home";
      //depois mudar para redirecionar pro post em si
  }

  ngOnInit() {
  }

}
