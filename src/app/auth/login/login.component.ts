import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
// import { SocialAuthService, SocialUser } from 'slr-angularx-social-login';
// import { FacebookLoginProvider, GoogleLoginProvider } from 'slr-angularx-social-login';
import { User } from '../../_models/User';
import { map } from 'rxjs/operators';
// import { isObjectEmpty } from 'ngx-bootstrap/chronos/utils/type-checks';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    showPasswordStatus!: boolean;
    isSubmitting!: boolean;
    successMessage!: string;
    errorMessage!: string;
    errors: object = {};
     ipAddress = '';
    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        // password: new FormControl('', [Validators.required]),
        rememberMe: new FormControl(false),
    });
    showOtpScreenr!: boolean;
    user: any;
    maskedPhoner!: string;
    submittedr!: boolean;

    isAccountVerifiedr!: boolean;
    accountVerifyr!: boolean;

    // socialUser!r: SocialUser;
    // GoogleLoginProvider = GoogleLoginProvider;
  userIP = ''

 public lat: any;
  public lng: any;
    latitude: any;
    longitude: any;
    zipcode!: string;
    address!: string;
    device_ip!: string;
    device_id!: string;
    password!: string;
    submitted!: boolean;
    maskedPhone: any;
    showOtpScreen!: boolean;
    isAccountVerified!: boolean;
    accountVerify!: boolean;
    constructor(
        private spinner: NgxSpinnerService,
        private api: ApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthenticationService,
      
        private httpClient:HttpClient
       
    ) {
       
    }

    ngOnInit(): void {


    }


loadIp() {
this.httpClient.get('https://jsonip.com')
.pipe(
  switchMap((value:any) => {
	this.userIP = value.ip;
    console.log('user IP Address',this.userIP)

	let url = `http://api.ipstack.com/${value.ip}?access_key='Your_API_Key'`
	return this.httpClient.get(url);
  })
).subscribe(
  (value:any) => {
	console.log(value);

  },
  err => {
	console.log(err);
  }
);

}
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log('latitude',this.lat);
          console.log('longitude',this.lng);
          
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }



    onSubmit(): void {
         this.loadIp();
   this.getLocation();
    this.spinner.show();
        this.errorMessage = '';
        this.successMessage = '';
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(
            
            this.latitude=this.lat,
            this.longitude=this.lng,
            this.zipcode='000000',
            this.address='0',
            this.device_ip=this.userIP,
            this.device_id='0',
            this.password='Test@123',
            this.loginForm.value.email,
            this.loginForm.value.rememberMe,
        )
            .subscribe((res: any) => {
                console.log("login.." , res);
                
                    this.errors = [];
                    this.spinner.hide();
                    if (res.accessToken) {
                        this.user = res;
                        this.maskedPhone = res.maskedPhone;
                       // this.router.navigate(['/']);
                        this.showOtpScreen = true;
                    }
                },
                (err) => {
                    console.log("errormessage......" , err);

                    this.errors = err.error.errors;
                    this.errorMessage = '';

                    if (err.error.message.length) {
                        this.errorMessage = err.error.message.toString();
                        if (err.error.accountVerified) {
                       this.router.navigate(['/register']);

                            this.isAccountVerified = true;
                        }
                    }

                    this.spinner.hide();
                });

    }

    onAuthenticate(): void {
        this.submitted = true;
        this.isSubmitting = true;

        this.errorMessage = '';
        this.successMessage = '';
        this.authService.login(
            
            this.latitude=this.lat,
            this.longitude=this.lng,
            this.zipcode='000000',
            this.address='0',
            this.device_ip=this.userIP,
            this.device_id='0',
            this.password='Test@123',
            this.loginForm.value.email,
            this.loginForm.value.rememberMe,
        )
            .subscribe((res: any) => {
                this.errorMessage = '';
                this.successMessage = '';
                this.isSubmitting = false;
                if (res.accessToken) {
                    this.authService.setUser();
                    this.router.navigate(['/']);
                } else if (!!res.errors) {
                    // @ts-ignore
                    for (let e of Object.values(res.errors)) {
                        // @ts-ignore
                        this.errors.push(e);
                    }
                }
            },
                (err) => {
                    this.errors = err.error.errors;

                    if (err.error.message.length) {
                        this.errorMessage = err.error.message.toString();

                    }

                    this.isSubmitting = false;
                });
    }

    // Function
    showPassword(): void {
        this.showPasswordStatus = !this.showPasswordStatus;
    }

    onOtpChange(otp: string | any[]): void {
        this.errorMessage = '';
        if (otp.length === 6) {
          this.spinner.show();
           
                    this.api.get(`auth/login/${this.user['verifyToken']}/otp/verify/${otp}`)
                .subscribe((res: any) => {
                    console.log("otpadfs" ,res);
                    
                      this.spinner.hide();
                    this.errors = [];
                    this.authService.updateAuthUser(this.user);
                    this.router.navigate(['/']);

 let url=`/`;
                    const snapshot = this.activatedRoute.snapshot.queryParams;
                    if ('returnUrl' in snapshot && (snapshot['returnUrl'].length && snapshot['returnUrl'] != '/')) {
                        url = snapshot['returnUrl'];
                    }

                    if (res.verified) {
                        this.router.navigate([url]);
                    }
                },
                    (err) => {
                        console.log("wrog...", );
                        

                        this.errors = err.error.errors;
                        if (err.error.message.length) {
                            this.errorMessage = err.error.message.toString();
                        }

                                  this.spinner.hide();

                    });
        }
    }

    accountVerifcation() {
        this.accountVerify = true;
    }

    get f() {
        return this.loginForm.controls;
    }

    resendOtp() {
        this.errorMessage = '';
        this.successMessage = '';
        this.api.get(`otp/send`)
            .subscribe((res: any) => {
                this.errorMessage = '';
                this.successMessage = '';
                this.isSubmitting = false;
                this.successMessage = 'Otp is Sent to Your Mobile Number';
            },
                (err) => {
                    this.errors = err.error.errors;

                    if (err.error.message.length) {
                        this.errorMessage = err.error.message.toString();
                    }

                    this.isSubmitting = false;
                });
    }

    // signInWithGoogle(): void {
    //     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    //     this.socialAuthService.authState.subscribe(socialUser => {
    //         this.socialUser = socialUser;

    //         if (!!this.socialUser) {
    //             const data = {
    //                 // id: this.socialUser['id'],

    //                 name: this.socialUser['name'],
    //                 email: this.socialUser['email'],
    //                 provider: this.socialUser['provider'],
    //                 device_ip:this.userIP,
    //                 latitude:this.lat,
    //                 longitude:this.lng,

                    
   
            

    //             }
    //             this.api.post('auth/social-login', data)
    //                 .pipe(map((sUser: SocialUser) => {
    //                     if (sUser) {
    //                         this.authService.updateAuthUser(sUser);
    //                         localStorage.setItem('isSocialLogin', '1');
    //                     }
    //                     return sUser;
    //                 }))
    //                 .subscribe((res: any) => {
    //                     this.errors = [];
    //                     this.isSubmitting = false;
    //                     if (res.accessToken) {
    //                         this.user = res;
    //                         console.log('mm',this.user)
    //                         this.maskedPhone = res.maskedPhone;
    //                         this.router.navigate(['/']);
                            
    //                         // this.showOtpScreen = true;
    //                     }
    //                 },
    //                     (err) => {
    //                         localStorage.setItem('dataemail', this.socialUser['email']);
    //                                 localStorage.setItem('dataname', this.socialUser['name']);
    //                                 if(err.status==400){
    //                                     this.router.navigate(['/'])

    //                                 }
    //                                 else{
    //                                     this.router.navigate(['/auth/register'])

    //                                 }
    //                         this.errors = err.error.errors;
    //                         this.errorMessage = '';

    //                         if (err.error.message.length) {
    //                             this.errorMessage = err.error.message.toString();
    //                             if(err.error.accountVerified) {
    //                                 this.isAccountVerified = true;
                                     

    //                             }
    //                         }

    //                         this.isSubmitting = false;
    //                     });
    //         }
    //         /*else {
    //             alert('please clear your cookies');
    //             return;
    //         } */


    //         // if (!!this.socialUser && this.socialUser.authToken) {
    //         //     this.authService.updateAuthUser(this.socialUser);
    //         //     localStorage.setItem('isSocialLogin', '1');
    //         //     this.router.navigate(['/']);
    //         // }
    //         // console.log('chck', this.socialUser);
    //     });
    // }

    // signInWithFB(): void {
    //     this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    //     this.socialAuthService.authState.subscribe(socialUser => {
    //         this.socialUser = socialUser;
    //         if (!!this.socialUser) {
    //             this.api.post('auth/social-login', this.socialUser)
    //                 .pipe(map((sUser: SocialUser) => {
    //                     if (sUser) {
    //                         this.authService.updateAuthUser(sUser);
    //                         localStorage.setItem('isSocialLogin', '1');
    //                     }
    //                     return sUser;
    //                 }))
    //                 .subscribe((res: any) => {
    //                     this.errors = [];
    //                     this.isSubmitting = false;
    //                     if (res.accessToken) {
    //                         this.user = res;
    //                         this.maskedPhone = res.maskedPhone;
    //                         this.router.navigate(['/']);
    //                         // this.showOtpScreen = true;
    //                     }
    //                 },
    //                     (err) => {
    //                         this.errors = err.error.errors;
    //                         this.errorMessage = '';

    //                         if (err.error.message.length) {
    //                             this.errorMessage = err.error.message.toString();
    //                             if (err.error.accountVerified) {
    //                                 this.isAccountVerified = true;
    //                             }
    //                         }

    //                         this.isSubmitting = false;
    //                     });
    //         }
    //         /*else {
    //             alert('please clear your cookies');
    //             return;
    //         } */


    //         // if (!!this.socialUser && this.socialUser.authToken) {
    //         //     this.authService.updateAuthUser(this.socialUser);
    //         //     localStorage.setItem('isSocialLogin', '1');
    //         //     this.router.navigate(['/']);
    //         // }
    //         // console.log('chck', this.socialUser);
    //     });
    // }

    // signOut(): void {
    //     this.socialAuthService.signOut();
    // }

    // refreshGoogleToken(): void {
    //     this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    // }
redire(){
    
      this.router.navigate(['http://stg-wallet.goldsikka.com/']);

}
}
