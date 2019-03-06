import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  authData = { email: '', password: '' };
  errorMessage: '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.signIn(this.authData).subscribe(
      tasks => this.router.navigate(['/tasks']),
      error => this.errorMessage = error
    );
  }

}
