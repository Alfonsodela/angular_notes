import { SigninModule } from './pages/signin/signin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


// TO DO
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('src/app/pages/notes-list/notes-list.module').then(m => m.NotesListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list/:id',
    loadChildren: () => import('src/app/pages/notes-detail/notes-detail.module').then(m => m.NotesDetailModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-notes',
    loadChildren: () => import('src/app/pages/create-notes/create-notes.module').then(m => m.CreateNotesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-note/:id',
    loadChildren: () => import('src/app/pages/edit-notes/edit-notes.module').then(m => m.EditNotesModule),
    canActivate: [AuthGuard]
  },
  {
    path: `user-profile/:id`, loadChildren: () =>
      import('src/app/pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('src/app/pages/singup/singup.module').then(m => m.SingupModule)
  },
  {
    path: `sign-in`, loadChildren: () =>
      import('src/app/pages/signin/signin.module').then(m => m.SigninModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
  
  ]
})
export class AppRoutingModule { }
