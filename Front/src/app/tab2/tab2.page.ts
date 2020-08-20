import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilterService} from '../services/filter.service';
import { AuthService} from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  posts = [];
  users = [];
  lastSearch;
  searchForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public filterService: FilterService,
    public authService: AuthService,
    public changeDetect: ChangeDetectorRef,
    public toastController: ToastController,
    private route: Router) {
      this.searchForm = this.formBuilder.group({
        filter: [null],
      });
  }

  ngOnInit() {

  }
  ionViewWillLeave(){
    this.resetSearch();
  }

  async presentToast(message: string) {
   const toast = await this.toastController.create({
     message,
     duration: 2000,
     color: "secondary"
   });
   toast.present();
 }

  followUser(id){
    this.authService.followUser(id).subscribe((res)=>{
      console.log(res);
      this.submitString(this.lastSearch);
    }, (err) => {console.log(err); })
  }

  followVisitante(){
      this.presentToast('Para seguir essa pessoa é necessário entrar em uma conta.');
      this.route.navigate(['/login']);
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
            this.lastSearch = form.value;
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


  submitString(lastSearch){
    let userToken = localStorage.getItem('userToken');
    if(userToken){
      this.filterService.filterAuthUsers(lastSearch).subscribe(
        (res)=>{
          this.users = res;
          console.log(res);
        }, (err) => {console.log(err); })}
  }

  resetSearch(){
    this.filterService.filterPosts('').subscribe(
      (res) => {
        this.posts = [];
        console.log(res);
      }, (err) => {console.log(err); });

      this.filterService.filterUsers('').subscribe(
        (res) => {
          this.users = [];
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
