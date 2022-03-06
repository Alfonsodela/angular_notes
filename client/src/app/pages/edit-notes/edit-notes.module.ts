import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditNotesRoutingModule } from './edit-notes-routing.module';
import { EditNotesComponent } from './edit-notes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditNotesComponent
  ],
  imports: [
    CommonModule,
    EditNotesRoutingModule,
    SharedModule
  ]
})
export class EditNotesModule { }
