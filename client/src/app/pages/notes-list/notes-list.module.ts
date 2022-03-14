import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesListRoutingModule } from './notes-list-routing.module';
import { NotesListComponent } from './notes-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotesListComponent
  ],
  imports: [
    CommonModule,
    NotesListRoutingModule,
    SharedModule
  ]
})
export class NotesListModule { }
