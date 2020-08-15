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
        degree: 'ciência da computação'
      },
      {
        name: 'Diana Malena',
        degree: 'ciência da computação'
      },
      {
        name: 'Felipe Calvarati',
        degree: 'ciência da computação'
      },

      {
        name: 'Joana Mopla',
        degree: 'ciência da computação'
      },

    ];
  }

}
