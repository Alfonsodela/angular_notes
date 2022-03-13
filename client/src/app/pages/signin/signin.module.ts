import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule, 
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
