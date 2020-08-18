import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    editDetailsForm: FormGroup;
    editMode = false;


    constructor(public formBuilder: FormBuilder, public authService: AuthService, private route: Router, public toastController: ToastController) {
      this.editDetailsForm = this.formBuilder.group({
        name: [null, [Validators.minLength(3)]],
        email: [null, [Validators.email]],
        degree: [null]
      });
    }
  ngOnInit() {}

  async presentToast() {
   const toast = await this.toastController.create({
     message: 'Suas alterações foram salvas!',
     duration: 2000,
     color: "secondary"
   });
   toast.present();
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
            this.route.navigate(['/tabs/tab3']);
        }, (err) => {console.log(err);
        }
    )
  }
}
