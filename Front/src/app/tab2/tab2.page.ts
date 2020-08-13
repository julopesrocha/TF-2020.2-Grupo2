import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilterService} from '../services/filter.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  posts = [];
  users = [];
  searchForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public filterService: FilterService) {
      // this.inicializar();
      this.searchForm = this.formBuilder.group({
          filter: [null],
      });
  }

  ngOnInit() {

  // }
  //
  // inicializar(){
      // this.posts = [
      //   {
      //     title: '1qualquer coisa',
      //     author: '1fulano',
      //     text: '1isso eh um texto tu'
      //   },
      //   {
      //     title: '2qualquer coisa',
      //     author: '2fulano',
      //     text: '2isso eh um texto'
      //   },
      //   {
      //     title: '3qualquer coisa',
      //     author: '3fulano',
      //     text: '3isso eh um texto'
      //   },
      //   {
      //     title: '4qualquer coisa',
      //     author: '4fulano',
      //     text: '4isso eh um texto'
      //   }
      // ]
  }

  submitForm(form) {
      this.filterService.filterPosts(form.value).subscribe(
        (res) => {
          this.posts = res;
          console.log(res);
        }, (err) => {console.log(err); }),

        this.filterService.filterUsers(form.value).subscribe(
          (res) => {
            this.users = res;
            console.log(res);
          }, (err) => {console.log(err); })
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
