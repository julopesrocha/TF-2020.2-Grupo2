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
        email: 'arthur.albuquerque@gmail.com'
      },
      {
        name: 'Diogo',
        email: 'diogo.albuquerque@gmail.com'
      },
      {
        name: 'Felipe',
        email: 'felipe.albuquerque@gmail.com'
      },
      {
        name: 'Luci',
        email: 'luci.albuquerque@gmail.com'
      },
      {
        name: 'Joaquim',
        email: 'joaquim.albuquerque@gmail.com'
      },

    ];
  }

}
