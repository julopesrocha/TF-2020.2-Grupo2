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
        autor: '1fulano',
        texto: '1isso eh um texto'
      },
      {
        title: '2qualquer coisa',
        autor: '2fulano',
        texto: '2isso eh um texto'
      },
      {
        title: '3qualquer coisa',
        autor: '3fulano',
        texto: '3isso eh um texto'
      },
      {
        title: '4qualquer coisa',
        autor: '4fulano',
        texto: '4isso eh um texto'
      }
    ]
  }

}
