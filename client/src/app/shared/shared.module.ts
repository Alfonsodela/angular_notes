import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { NoteComponent } from './components/note/note.component';



@NgModule({
  declarations: [
    FormComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    NoteComponent,
    FormComponent
  ]
})
export class SharedModule { }
