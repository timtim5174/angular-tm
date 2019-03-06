import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aufgabenverwaltung';
  constructor(private userService: UserService) { }

  get isAuthenticated() {
    return this.userService.isAuthenticated;
  }
}
