import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // currentUser$ = this.authSrv.currentUser$;

  // constructor(protected authSrv: AuthService) {}
  //
  // logout() {
  //   this.authSrv.logout();
  // }
  title = 'OfferteLavoro';
}
