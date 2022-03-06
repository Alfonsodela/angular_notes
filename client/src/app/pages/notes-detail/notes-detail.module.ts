import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesDetailRoutingModule } from './notes-detail-routing.module';
import { NotesDetailComponent } from './notes-detail.component';


@NgModule({
  declarations: [
    NotesDetailComponent
  ],
  imports: [
    CommonModule,
    NotesDetailRoutingModule
  ]
})
export class NotesDetailModule { }
