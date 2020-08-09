import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController} from '@ionic/angular';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public formBuilder: FormBuilder, public toastController: ToastController, public postService: PostService) {}


  ngOnInit() {}

}
