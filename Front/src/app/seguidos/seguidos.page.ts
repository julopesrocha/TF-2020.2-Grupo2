import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguidos',
  templateUrl: './seguidos.page.html',
  styleUrls: ['./seguidos.page.scss'],
})
export class SeguidosPage implements OnInit {

  users = [];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        name: 'Arthur',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Diogo',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Felipe',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Luci',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Joaquim',
        degree: 'ciencia da computacao'
      },

    ];
  }

}
