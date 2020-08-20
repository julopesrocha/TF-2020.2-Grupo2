import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user = {};
  isAdmin = false;

  constructor(public formbuilder: FormBuilder,
      public authService: AuthService,
      private route: Router) {}

  ngOnInit(){
    this.userDetails();
    console.log(this.user);
  }

  goToEditProfile() {
    this.route.navigate(['/edit-profile']);
  }

  userDetails(){
    this.authService.getDetails().subscribe((res)=>{
      this.user = res;
      this.isAdmin = res.admin;
    })
  }

  userLogout(){
    this.authService.logout().subscribe((res)=>{
      localStorage.removeItem("userToken");
      console.log(res);
      this.route.navigate(['/landing']);
    }, (err)=>{
      console.log(err);
    });
  }
}
