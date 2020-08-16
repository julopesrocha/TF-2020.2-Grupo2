import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
/* importar EditPostService */

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {

  editPostForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public toastController: ToastController, private route: Router) {

    this.editPostForm = this.formBuilder.group({
      course: [null, [Validators.required, Validators.minLength(3)]],
      teacher: [null, [Validators.required, Validators.minLength(3)]],
      content: [null, [Validators.required, Validators.minLength(3)]],
      tag: [null],
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Post editado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  submitForm(form) {
    /* this.editPostService.createPost(form.value).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['../thread:id']);
      }, (err) => { console.log(err); }) */
  }

  ngOnInit() {
  }

}
