import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { EditNotesModule } from './pages/edit-notes/edit-notes.module';
import { CreateNotesModule } from './pages/create-notes/create-notes.module';
import { HomeModule } from './pages/home/home.module';
import { NotesDetailModule } from './pages/notes-detail/notes-detail.module';
import { NotesListModule } from './pages/notes-list/notes-list.module';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptor';
=======
import { CoreModule } from './core/core/core.module';
>>>>>>> b99248922f43e2b0810e92e38b950a0a46aa4cb8

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
    HttpClientModule
=======
    CoreModule
>>>>>>> b99248922f43e2b0810e92e38b950a0a46aa4cb8

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
