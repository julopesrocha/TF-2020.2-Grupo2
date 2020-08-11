import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.page.html',
  styleUrls: ['./thread.page.scss'],
})
export class ThreadPage implements OnInit {

  original_post: Object;

  commentForm: FormGroup;

  comments = [];

  constructor(public formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      text: [null]
    });
  }

  ngOnInit() {

    this.original_post = {
      author: 'ana',
      title: 'titulo1',
      text: 'leifhncafauhnfkuafuh',
    };

    this.comments = [
      {
        author: 'fulano1',
        text: 'lorem ipsum 1'
      },
      {
        author: 'fulano2',
        text: 'lorem ipsum 2'
      },
      {
        author: 'fulano3',
        text: 'lorem ipsum 3'
      },
      {
        author: 'fulano4',
        text: 'lorem ipsum 4'
      },
    ];
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);

    
  }

}
