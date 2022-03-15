import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';

import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
   
    RouterModule,
    CoreModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    
  
  
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
