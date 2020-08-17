import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-seguidos',
  templateUrl: './seguidos.page.html',
  styleUrls: ['./seguidos.page.scss'],
})
export class SeguidosPage implements OnInit {

  users = [];

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.listFollowing();
  }

   unfollowUser(id){
    this.authService.unfollowUser(id).subscribe(
      (res)=>{
        console.log(res);
        this.listFollowing();
        // alert(res[0]);
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
