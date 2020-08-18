import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;
  photo: SafeResourceUrl;

  constructor(public formBuilder: FormBuilder, public authService: AuthService, private route: Router, private sanitizer: DomSanitizer, public toastController: ToastController) {

    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      degree: [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirm_password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      photo: [null]
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

  ngOnInit() {
  }

  goToLanding() {
    this.route.navigate(['/landing']);
  }
  //botar mediumtext na migration
  submitForm(form){
    form.value.photo = this.photo['changingThisBreaksApplicationSecurity'];
    console.log(form.value);
    this.authService.register(form.value).subscribe(
    (res) =>{
      console.log(res);
      this.presentToast('Conta cadastrada! Realize o login.');
      this.route.navigate(['/login']);
    }, (err) => {
      console.log(err);
      this.presentToast('Não foi possível realizar seu cadastro.');
   })
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }
}
