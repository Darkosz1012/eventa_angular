import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventa_angular';

  // currentUser: User | null = null;

  //   constructor(
  //       private router: Router,
  //       private authenticationService: AuthenticationService
  //   ) {
  //       // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  //   }

    // logout() {
    //     this.authenticationService.logout();
    //     this.router.navigate(['/login']);
    // }
}
