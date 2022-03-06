import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

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
  },
  {
    path: `user-profile/:id`, loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(m => m.UserProfileRoutingModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./pages/singup/singup.module').then(m => m.SingupModule)
  },
  {
    path: `log-in`, loadChildren: () =>
      import('./pages/singing/singing-routing.module').then(m => m.SingingRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
