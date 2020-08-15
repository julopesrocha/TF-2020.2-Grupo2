import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.page.html',
  styleUrls: ['./thread.page.scss'],
})
export class ThreadPage implements OnInit {

  original_post: [];

  commentForm: FormGroup;

  comments = [];

  constructor(public formBuilder: FormBuilder, private route: Router, private activatedRoute: ActivatedRoute) {
    this.commentForm = this.formBuilder.group({
      text: [null]
    });
  }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.original_post = [];

    this.comments = [];
  }

  goToHome() {
    this.route.navigate(['/tabs/home']);
  }

  goBackToSearch(){
    this.route.navigate(['/tabs/tab2']);
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);


  }

  deleteComment(){
    console.log('comment deleted');

  }

  editComment(){
    console.log('comment edited');

  }

}
