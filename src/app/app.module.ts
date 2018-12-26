import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleComponent } from './bubble/bubble.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupBtnComponent } from './signup-btn/signup-btn.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { GetPredictionComponent } from './get-prediction/get-prediction.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import 'firebase/auth';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupBtnComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    GetPredictionComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
