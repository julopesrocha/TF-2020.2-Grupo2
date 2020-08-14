import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    editDetailsForm: FormGroup;
    editMode = false;


    constructor(public formBuilder: FormBuilder, public authService: AuthService, private route: Router) {
      this.editDetailsForm = this.formBuilder.group({
        name: [null, [Validators.minLength(3)]],
        email: [null, [Validators.email]],
        degree: [null]
      });
    }
  ngOnInit() {
  }

  goToPerfil() {
    this.route.navigate(['/tabs/tab3']);
  }

  editDetails(form){
    console.log(form);
    console.log(form.value);
    this.editMode = false;
    this.authService.editProfile(form.value).subscribe(
        (res)=>{
            console.log(res);
        }, (err) => {console.log(err);
        }
    )
  }

}
