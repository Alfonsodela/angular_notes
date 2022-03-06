import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('src/app/pages/notes-list/notes-list.module').then(m => m.NotesListModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('src/app/pages/notes-detail/notes-detail.module').then(m => m.NotesDetailModule)
  },
  {
    path: 'create-notes',
    loadChildren: () => import('src/app/pages/create-notes/create-notes.module').then(m => m.CreateNotesModule)
  },
  {
    path: 'edit-notes',
    loadChildren: () => import('src/app/pages/edit-notes/edit-notes.module').then(m => m.EditNotesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
