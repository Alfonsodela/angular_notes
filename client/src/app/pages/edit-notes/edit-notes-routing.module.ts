import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNotesComponent } from './edit-notes.component';

const routes: Routes = [
  {
    path: '',
    component: EditNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditNotesRoutingModule { }
