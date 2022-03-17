import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SingupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class SingupModule { }