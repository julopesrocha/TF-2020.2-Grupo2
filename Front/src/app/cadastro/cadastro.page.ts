import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public cadastroService: CadastroService) {

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
      this.cadastroService.createUser(form.value).subscribe(
             (res) => {console.log(res);
             }, (err) => {console.log(err); })
//      window.location.href="/tabs/home";
  }
}
