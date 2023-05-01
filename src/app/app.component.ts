import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { AuthenticationService } from './_services/authentication/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {

  title = 'ecom-goldsikka';
  onActivate(event: Event) {
  window.scrollTo(0, 0);
}
showHead: boolean = false;
  constructor(private router: Router){

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if ((event['url'] == '/login')||(event['url'] == '/register')) {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }
ngOnInit() {
    /** spinner starts on init */
    


  }

}
