import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService, private route: Router) {

    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirm_password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      degree: [null]
    });
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  goToLanding() {
    this.route.navigate(['/landing']);
  }
  
=======
>>>>>>> 825dad1d34586d29534ce44e4d22b04523e34297
  submitForm(form){
    console.log(form.value);
    this.authService.register(form.value).subscribe(
    (res) => 
    {
      console.log(res);
    }, (err) => {
      console.log(err); })
  }
}
