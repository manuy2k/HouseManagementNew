import { MaterialFilesModule } from './material-files.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberHomeComponent } from './HouseMember/member-home/member-home.component';
import { LandingComponent } from './landing/landing.component';
import { CLFormComponent } from './landing/components/clform/clform.component';
import { FormsModule } from '@angular/forms';
import { BadLoginComponent } from './OtherComponents/bad-login/bad-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberHomeComponent,
    LandingComponent,
    CLFormComponent,
    BadLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialFilesModule

  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
