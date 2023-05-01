import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpErrorResponse } from 'node-angular-http-client';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from "@angular/router";
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

   profileResponse: any;
 profileDetails=null;
  name:any;
  errors: object = {};
  isSubmitting!: boolean;
  errorMessage!: string;
  successMessage!: string;
  addressResponse: any;
  bankAccountList: any;
  successMessage1!: string;
  errorMessage1: any;


  constructor(
     private api: ApiService,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.checkAccess();
      this.getprofileDetails();
      this.getAddressList();
  this.getBanksList();
  }

  getBanksList(): void {
    this.api.get(`user/bankAccount`)
      .subscribe((res: any) => {
        this.bankAccountList = res.data;
      });
  }

  deleteBank(id:any): void {
    if (confirm('Are you sure to delete ? ')) {
      this.api.delete(`user/bankAccount/` + id)
        .subscribe((res: any) => {
            this.errorMessage = '';
            this.successMessage = '';
            this.getBanksList();
            this.successMessage1 = 'Bank Account Deleted Successfully';
          },
          (err: HttpErrorResponse) => {
            this.isSubmitting = false;
            this.errors = err.error.errors;
            if (err.error.message.length) {
              this.errorMessage1 = err.error.message.toString();
            }

            this.isSubmitting = false;
          });
    }
  }

  //Make Primary
  onMakePrimary2(id:any): void {
    this.api.get(`user/bankAccount/${id}/makePrimary`)
      .subscribe((res: any) => {
          this.getBanksList();
        },
        (err: HttpErrorResponse) => {
          this.isSubmitting = false;
        });
  }
  onSubmit(): void {}
   getprofileDetails(): void {
    this.api.get(`user/profile`)
      .subscribe((res: any) => {
        this.profileResponse = res;
          console.log("response", this.profileResponse);
        }, (err: HttpErrorResponse) => {
                         this.router.navigate(['/login']);

          });
           
          
  }
   getAddressList(): void {
    this.api.get(`user/address`)
      .subscribe((res: any) => {
        this.addressResponse = res;
      });
  }

  deleteAddress(id:any): void {
    if (confirm('Are you sure to delete ? ')) {
      this.api.delete(`user/address/${id}`)
        .subscribe((res: any) => {
            this.errorMessage = '';
            this.successMessage = '';
            this.successMessage = 'Address Deleted Successfully';
            this.getAddressList();
          },
          (err: HttpErrorResponse) => {
            this.isSubmitting = false;
          });
    }
  }

  onMakePrimary(id:any): void {
    this.api.get(`user/address/${id}/makePrimary`)
      .subscribe((res: any) => {
          this.getAddressList();
        },
        (err: HttpErrorResponse) => {
          this.isSubmitting = false;
        });
  }

}
