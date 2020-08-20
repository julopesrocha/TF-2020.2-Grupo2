import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {

  editPostForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public toastController: ToastController,
    private route: Router,
    public threadService: ThreadService,
    private activatedRoute: ActivatedRoute) {

    this.editPostForm = this.formBuilder.group({
      course: [null, [Validators.minLength(3)]],
      teacher: [null, [Validators.minLength(3)]],
      content: [null, [Validators.minLength(3)]],
      tag: [null],
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'secondary'
    });
    toast.present();
  }

  submitForm(form) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.threadService.editPost(form.value, id).subscribe(
      (res) => {
        console.log(res);
        this.presentToast('Post editado com sucesso!');
        this.route.navigate(['thread', id]);
      }, (err) => { console.log(err);
         this.presentToast('Não foi possível editar esse post.'); })
  }
  goToPost() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.route.navigate(['thread', id]);
  }

  ngOnInit() {
  }

}
