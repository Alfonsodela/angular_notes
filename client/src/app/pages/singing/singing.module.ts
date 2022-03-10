import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingingRoutingModule } from './singing-routing.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SingingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SinginModule { }