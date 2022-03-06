import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesListRoutingModule } from './notes-list-routing.module';
import { NotesListComponent } from './notes-list.component';


@NgModule({
  declarations: [
    NotesListComponent
  ],
  imports: [
    CommonModule,
    NotesListRoutingModule
  ]
})
export class NotesListModule { }
