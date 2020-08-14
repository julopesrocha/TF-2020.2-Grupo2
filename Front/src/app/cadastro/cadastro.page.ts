import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
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

  constructor(public formBuilder: FormBuilder, public authService: AuthService, private route: Router, private sanitizer: DomSanitizer) {

    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      degree: [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirm_password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      //photo: [null]
    });
  }

  ngOnInit() {
  }

  goToLanding() {
    this.route.navigate(['/landing']);
  }

  submitForm(form){
    console.log(form.value);
    this.authService.register(form.value).subscribe(
    (res) =>
    {
      console.log(res);
      this.route.navigate(['/tabs/home']);
    }, (err) => {
      console.log(err); })
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
