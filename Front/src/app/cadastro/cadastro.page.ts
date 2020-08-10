import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      confirm_password: [null],
      degree: [null]
    });
  }

  ngOnInit() {
  }
  submitForm(form) {
      console.log(form);
      console.log(form.value);
//      window.location.href="/tabs/home";
}
}
