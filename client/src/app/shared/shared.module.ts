import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  ],
  exports: [
    NoteComponent,
    FormComponent
  ]
})
export class SharedModule { }
