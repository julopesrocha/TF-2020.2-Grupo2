import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts = [];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        title: '1qualquer coisa',
        user: '1fulano',
        text: '1isso eh um texto'
      },
      {
        title: '2qualquer coisa',
        user: '2fulano',
        text: '2isso eh um texto'
      },
      {
        title: '3qualquer coisa',
        user: '3fulano',
        text: '3isso eh um texto'
      },
      {
        title: '4qualquer coisa',
        user: '4fulano',
        text: '4isso eh um texto'
      }
    ]
  }

}
