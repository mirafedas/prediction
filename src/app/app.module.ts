import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleComponent } from './bubble/bubble.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { GetPredictionComponent } from './get-prediction/get-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    GetPredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
