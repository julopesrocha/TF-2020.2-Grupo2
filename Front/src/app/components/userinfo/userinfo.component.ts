import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {

  @Input() name: string;
  @Input() degree: string;
  @Input() id: number;
  @Input() photo: string;
  /* depois incluir dados da foto de perfil */

  constructor(public authService: AuthService, public toastController: ToastController) { }

  ngOnInit() {}

  async presentToast() {
   const toast = await this.toastController.create({
     message: 'Usuário seguido!',
     duration: 2000,
     color: "secondary"
   });
   toast.present();
 }

  followUser(){
    this.authService.followUser(this.id).subscribe((res)=>{
      console.log(res);
    }, (err) => {console.log(err); })
  }

}
