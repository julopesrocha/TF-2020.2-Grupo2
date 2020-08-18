import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import { ToastController} from '@ionic/angular';


@Component({
  selector: 'app-seguidos',
  templateUrl: './seguidos.page.html',
  styleUrls: ['./seguidos.page.scss'],
})
export class SeguidosPage implements OnInit {

  users = [];

  constructor(public authService: AuthService, public toastController: ToastController) { }

  ngOnInit() {
    this.listFollowing();
  }

  async presentToast() {
   const toast = await this.toastController.create({
     message: 'Você deixou de seguir o usuário!',
     duration: 2000,
     color: "secondary"
   });
   toast.present();
 }

   unfollowUser(id){
    this.authService.unfollowUser(id).subscribe(
      (res)=>{
        console.log(res);
        this.listFollowing(this.users);
      },(err) =>{
        console.log(err);
        alert(err.error[0]);
    },
    );
  }

  listFollowing(){
    this.authService.listUserFollowing().subscribe((res)=>{
      this.users = res;
      console.log(this.users);
    }, (err) => {console.log(err);}
    )
  }

 }
