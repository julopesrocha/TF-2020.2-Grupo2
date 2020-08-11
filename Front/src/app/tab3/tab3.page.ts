import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user = {};

  constructor(public authService: AuthService) {}

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

}
