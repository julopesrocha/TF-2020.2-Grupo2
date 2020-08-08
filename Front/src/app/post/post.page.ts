import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

postForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
      this.postForm = this.formBuilder.group({
        class:[null],
        content:[null],
        tag:[null],
      });
   }

   submitForm(form) {
       console.log(form);
       console.log(form.value);
   }

  ngOnInit() {
  }

}
