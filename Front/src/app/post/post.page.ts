import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController} from '@ionic/angular';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

postForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public toastController: ToastController, public postService: PostService) {
      this.postForm = this.formBuilder.group({
          course: [null, [Validators.required, Validators.minLength(3)]],
          content: [null, [Validators.required, Validators.minLength(3)]],
          //tag:[null],
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
      console.log(form);
      console.log(form.value);
      this.postService.createPost(body).subscribe(
        (res) => {console.log(res);
        }, (err) => {console.log(err); }
    )
      window.location.href="/tabs/home";
  }

  ngOnInit() {
  }

}
