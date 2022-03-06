import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNotesRoutingModule } from './create-notes-routing.module';
import { CreateNotesComponent } from './create-notes.component';


@NgModule({
  declarations: [
    CreateNotesComponent
  ],
  imports: [
    CommonModule,
    CreateNotesRoutingModule
  ]
})
export class CreateNotesModule { }
