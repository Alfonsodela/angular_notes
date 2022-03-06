import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesDetailComponent } from './notes-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NotesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesDetailRoutingModule { }
