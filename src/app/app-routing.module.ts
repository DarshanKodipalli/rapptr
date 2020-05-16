import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingScreenComponent } from './landingScreen/landingScreen';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
