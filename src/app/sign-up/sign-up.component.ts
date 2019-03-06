import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  accountData = { name: '', email: '', password: '', passwordCheck: '' };
  errorMessage: '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.signUp(this.accountData).subscribe(
      tasks => this.router.navigate(['/tasks']),
      error => this.errorMessage = error
    );
  }

}
