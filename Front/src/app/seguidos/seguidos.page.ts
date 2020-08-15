import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
        name: 'Arthur Moraes',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Diogo Malena',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Felipe Calvarati',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Luci Pabel',
        degree: 'ciencia da computacao'
      },
      {
        name: 'Joaquim Mopla',
        degree: 'ciencia da computacao'
      },

    ];
  }

}
