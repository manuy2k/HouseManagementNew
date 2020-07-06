import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberHomeComponent } from './HouseMember/member-home/member-home.component';
import { LandingComponent } from './landing/landing.component';
import { CLFormComponent } from './landing/components/clform/clform.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberHomeComponent,    
    LandingComponent,
    CLFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
