import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  users: [];

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.listFollowing();
    
  }

  listFollowing(){
    this.authService.listUserFollowing().subscribe((res)=>{
      this.users = res;
    }, (err) => {console.log(err);}
    )
  }



}
