import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import {Event, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  currentUser: any;
  mainn: any;
  favo: any;
    profileResponse: any;
 profileDetails=null;
  name:any;
  errors: object = {};
  isSubmitting!: boolean;
  errorMessage!: string;
  successMessage!: string;
  addressResponse: any;
  bankAccountList: any;

  constructor(
    private router:Router,
     private api: ApiService,
    ) { }

  ngOnInit(): void {
      this.getprofileDetails();
  }
  
func(){
  this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
console.log(this.currentUser.verifyToken)
this.mainn=this.currentUser.verifyToken;
  if(this.mainn==null){
    Swal.fire({
      title: 'Log In Required',
      text: '',
      icon: 'question',
          confirmButtonColor: '#1a2e22',
      showCancelButton: true,
      
    }).then((result) => {
            if (result.isConfirmed) {
                // redirect to delete data

    this.router.navigate(['/login']);

              }})
  }
  else{

                     this.router.navigate(['/cart']);

  }
}
func1(){
  this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
console.log(this.currentUser.verifyToken)
this.mainn=this.currentUser.verifyToken;
  if(this.mainn==null){
    Swal.fire({
      title: 'Log In Required',
      text: '',
      icon: 'question',
          confirmButtonColor: '#1a2e22',
      showCancelButton: true,
      
    }).then((result) => {
            if (result.isConfirmed) {
                // redirect to delete data

               this.router.navigate(['/login']);

              }})
  }
  else{
  
                     this.router.navigate(['/wishlist']);

  }
}

onSubmit(): void {}
   getprofileDetails(): void {
    this.api.get(`user/profile`)
      .subscribe((res: any) => {
        this.profileResponse = res;
          console.log("response", this.profileResponse);
        });
  }
  
 
 

}
