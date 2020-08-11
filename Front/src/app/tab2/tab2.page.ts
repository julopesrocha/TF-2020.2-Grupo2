import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  posts = [];
  searchForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
      // this.inicializar();
      this.searchForm = this.formBuilder.group({
          search: [null],
      });
  }

  ngOnInit() {

  // }
  //
  // inicializar(){
      this.posts = [
        {
          title: '1qualquer coisa',
          author: '1fulano',
          text: '1isso eh um texto tu'
        },
        {
          title: '2qualquer coisa',
          author: '2fulano',
          text: '2isso eh um texto'
        },
        {
          title: '3qualquer coisa',
          author: '3fulano',
          text: '3isso eh um texto'
        },
        {
          title: '4qualquer coisa',
          author: '4fulano',
          text: '4isso eh um texto'
        }
      ]
  }

  submitForm(form) {
      console.log(form);
      console.log(form.value);
  }

  // buscar(ev: any){
  //     this.inicializar();
  //     const val = ev.target.value;
  //     if (val && val.trim() !== '') {
  //         this.posts = this.posts.filter((post) => {
  //             return (post.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //         });
  //     }
  // }

}
