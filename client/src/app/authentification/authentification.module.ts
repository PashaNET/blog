import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent, 
    RegistrationComponent
  ],
  exports: [
    LoginComponent, 
    RegistrationComponent
  ]
})
export class AuthentificationModule { }
