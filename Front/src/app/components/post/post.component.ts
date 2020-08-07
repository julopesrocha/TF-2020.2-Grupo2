import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() titulo: string;
  @Input() autor: string;
  @Input() texto: string;


  constructor() { }

  ngOnInit() {}

}
