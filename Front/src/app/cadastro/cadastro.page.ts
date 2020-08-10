import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) {

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
  
  submitForm(form){
    console.log(form.value);
    this.authService.register(form.value).subscribe(
          (res) => {console.log(res);
          }, (err) => {console.log(err); })
  }
}
