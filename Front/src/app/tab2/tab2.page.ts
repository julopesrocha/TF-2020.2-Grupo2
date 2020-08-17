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

  }

  submitForm(form) {
    let userToken = localStorage.getItem('userToken');

      this.filterService.filterPosts(form.value).subscribe(
        (res) => {
          this.posts = res;
          console.log(res);
        }, (err) => {console.log(err); });
        
      if(userToken){
        this.filterService.filterAuthUsers(form.value).subscribe(
          (res)=>{
            this.users = res;
            console.log(res);
          }, (err) => {console.log(err); })
        }else{
          this.filterService.filterUsers(form.value).subscribe(
            (res) => {
              this.users = res;
              console.log(res);
            }, (err) => {console.log(err); })
        }
      
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
