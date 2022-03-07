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
import { CoreModule } from './core/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
