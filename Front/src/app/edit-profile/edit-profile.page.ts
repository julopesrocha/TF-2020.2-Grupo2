import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    editDetailsForm: FormGroup;
    editMode = false;
    user_id: number;


    constructor(public formBuilder: FormBuilder, public authService: AuthService) {
      this.user_id = JSON.parse(localStorage.getItem('user')).id;
      this.editDetailsForm = this.formBuilder.group({
        name: [null, [Validators.minLength(3)]],
        email: [null, [Validators.email]],
        password: [null, [Validators.minLength(6), Validators.maxLength(20)]],
        degree: [null]
      });
    }
  ngOnInit() {
  }
  sendEditDetails(form){
    console.log(form);
    console.log(form.value);
    form.value.id = this.id;
    this.editMode = false;
    this.authService.updateUser(this.user_id, form.value).subscribe(
        (res)=>{
            console.log(res);
        }, (err) => {console.log(err);
        }
    )
  }

}
