import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {

  @Input() name: string;
  @Input() degree: string;
  @Input() id: number;
  /* depois incluir dados da foto de perfil */

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  followUser(){
    this.authService.followUser(this.id).subscribe((res)=>{
      console.log(res);
    }, (err) => {console.log(err); })
  }

}
