import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SingupRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SingupModule { }