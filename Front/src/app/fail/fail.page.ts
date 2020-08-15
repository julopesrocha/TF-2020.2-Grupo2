import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.page.html',
  styleUrls: ['./fail.page.scss'],
})
export class FailPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.route.navigate(['/login']);
  }

}
