import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/* implementar auth */

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  editProfileForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
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
