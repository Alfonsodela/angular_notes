import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule
  ],
})
export class CoreModule { }
