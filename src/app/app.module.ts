import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotificationComponent } from './notification/notification.component';
import { TaskService } from './task.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './/app-routing.module';

import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { SignOutComponent } from './sign-out/sign-out.component';

import { ErrorMessageComponent } from './error-message/error-message.component';
import { EmailDirective } from './email.directive';
import { SameContentAsDirective } from './same-content-as.directive';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NotificationComponent,
    SignUpComponent,
    SignInComponent,
    SignOutComponent,
    ErrorMessageComponent,
    EmailDirective,
    SameContentAsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ TaskService, AuthGuard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
