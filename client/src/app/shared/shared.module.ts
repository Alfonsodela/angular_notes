import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { FilterNotesPipe } from './pipes/filter-notes.pipe';



@NgModule({
  declarations: [
    FormComponent,
    NoteComponent,
    FilterNotesPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NoteComponent,
    FormComponent,
    FilterNotesPipe
  ]
})
export class SharedModule { }
