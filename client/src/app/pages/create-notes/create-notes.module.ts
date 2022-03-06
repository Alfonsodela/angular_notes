import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNotesRoutingModule } from './create-notes-routing.module';
import { CreateNotesComponent } from './create-notes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateNotesComponent
  ],
  imports: [
    CommonModule,
    CreateNotesRoutingModule,
    SharedModule
  ]
})
export class CreateNotesModule { }
