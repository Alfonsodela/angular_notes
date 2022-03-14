import { AuthService } from 'src/app/core/services/auth.service';
import { NoteService } from './services/note.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    
  ],
  providers: [
    NoteService,
    AuthService
  ],
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
