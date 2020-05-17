import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingScreenComponent } from './landingScreen/landingScreen';


const routes: Routes = [
  { path: '', component:LandingScreenComponent, pathMatch: "full" },
  { path: 'landing', component: LandingScreenComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
