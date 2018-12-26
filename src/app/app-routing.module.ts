import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GetPredictionComponent } from './get-prediction/get-prediction.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  {path: 'newadvice', component: GetPredictionComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
