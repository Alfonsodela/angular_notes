import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditNotesRoutingModule } from './edit-notes-routing.module';
import { EditNotesComponent } from './edit-notes.component';


@NgModule({
  declarations: [
    EditNotesComponent
  ],
  imports: [
    CommonModule,
    EditNotesRoutingModule
  ]
})
export class EditNotesModule { }
