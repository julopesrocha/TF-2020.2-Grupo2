import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService, private route: Router) {

    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
  }

  goToLanding() {
    this.route.navigate(['/landing']);
  }

  submitForm(form) {
      console.log(form);
      console.log(form.value);

      this.authService.login(this.loginForm.value).subscribe(
        (res)=>{
          console.log(res);
          localStorage.setItem('userToken', res.success.token);
          this.route.navigate(['/tabs/home']);
        },
        (err) => {
          console.log(err);
          this.route.navigate(['/tabs/home']);
        },
     )
  }

}
