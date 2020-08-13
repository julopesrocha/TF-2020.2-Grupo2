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
      author: 'Fulana',
      title: 'titulo1',
      text: 'leifhncafauhnfkuafuhdjasdjlaskdjlasjdlkasdasdasdasdasdajdlkjakldjlaksjd',
    };

    this.comments = [
      {
        author: 'fulano1',
        text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate scelerisque nibh ac lacinia. Nulla et convallis nunc. Aliquam erat volutpat. Aenean non mollis mauris. Donec fringilla quis diam a molestie. Pellentesque porttitor, nibh facilisis facilisis congue, est libero laoreet ante, ut dignissim velit ligula et diam.'
      },
      {
        author: 'fulano2',
        text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate scelerisque nibh ac lacinia. Nulla et convallis nunc. Aliquam erat volutpat. Aenean non mollis mauris. Donec fringilla quis diam a molestie. Pellentesque porttitor, nibh facilisis facilisis congue, est libero laoreet ante, ut dignissim velit ligula et diam.'
      },
      {
        author: 'fulano3',
        text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate scelerisque nibh ac lacinia. Nulla et convallis nunc. Aliquam erat volutpat. Aenean non mollis mauris. Donec fringilla quis diam a molestie. Pellentesque porttitor, nibh facilisis facilisis congue, est libero laoreet ante, ut dignissim velit ligula et diam.'
      },
      {
        author: 'fulano4',
        text: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate scelerisque nibh ac lacinia. Nulla et convallis nunc. Aliquam erat volutpat. Aenean non mollis mauris. Donec fringilla quis diam a molestie. Pellentesque porttitor, nibh facilisis facilisis congue, est libero laoreet ante, ut dignissim velit ligula et diam.'
      },
    ];
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
