import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user = {};

  constructor(public formbuilder: FormBuilder, public authService: AuthService, public alertController: AlertController) {}

  ngOnInit(){
    this.userDetails();
    console.log(this.user);
  }

  userDetails(){
    this.authService.getDetails().subscribe((res)=>{
      this.user = res;
    })
  }

  userLogout(){
    this.authService.logout().subscribe((res)=>{
      console.log(res);
    })
  }
  // sendEditDetails(form){
  //   console.log(form);
  //   console.log(form.value);
  //   form.value.id = this.id;
  //   this.editMode = false;
  //   this.authService.updateDetails(this.user_id, form.value).subscribe(
  //       (res)=>{
  //           console.log(res);
  //           this.userDetails(this.user);
  //       }, (err) => {console.log(err);
  //       }
  //   )
  // }
  //
  // toggleEdit(id){
  //     this.user_id = id;
  //     for( let comment of this.comments ){
  //       if (comment.id == id){
  //         this.textComment = comment.text;
  //       }
  //     }
  //     this.editMode = true;
  //   }

  // async alert() {
  //     const alert = await this.alertController.create({
  //         header: 'Tem certeza que deseja apagar seu perfil?',
  //         buttons: ['Cancelar', 'Apagar Perfil']
  //     });
  //
  //     await alert.present();
  // }

// conferir se é (id) ou mais alguma coisa
  deleteUser(id){
    this.authService.deleteUser(id).subscribe(
      (res)=>{
        console.log(res);
        alert(res[0]);
        // window.location.href="/login"
      },(err) =>{
        console.log(err);
        alert(err.error[0]);
      }
    );
  }

}
