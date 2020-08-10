import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) {

    this.loginForm = this.formBuilder.group({
      email:[null],
      password:[null]
    });
  }

  ngOnInit() {
  }
  submitForm(form) {
      console.log(form);
      console.log(form.value);

      this.authService.login(this.loginForm.value).subscribe(
        (res)=>{
          console.log(res);
          localStorage.setItem('userToken', res.success.token);
        },
        (err) => {
          console.log(err);
        }
      )
      window.location.href="/tabs/home";
  }
}
