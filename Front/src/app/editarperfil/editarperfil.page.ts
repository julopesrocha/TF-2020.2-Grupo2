import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController} from '@ionic/angular';
/* implementar auth */

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  editProfileForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public toastController: ToastController) {
    this.editProfileForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirm_password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      degree: [null]
    });
  }

  ngOnInit() {
  }

  async presentToast() {
   const toast = await this.toastController.create({
     message: 'Informações alteradas com sucesso!',
     duration: 2000
   });
   toast.present();
 }

 // submitForm(form) {
 //     // console.log(form);
 //     // console.log(form.value);
 //    this.authService.editProfile(form.value).subscribe(
 //      (res) => {console.log(res);
 //      this.route.navigate(['/tabs/tab3']);
 //      }, (err) => {console.log(err); })
 // }

  /* submitForm(form) {
    console.log(form.value);
    this.authService.register(form.value).subscribe(
      (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
  } */

}
