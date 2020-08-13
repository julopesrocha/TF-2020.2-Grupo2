import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {

  @Input() name: string;
  @Input() degree: string;
  /* depois incluir dados da foto de perfil */

  constructor() { }

  ngOnInit() {}

  followUser(){
    console.log('segui o usuario');
  }

}
