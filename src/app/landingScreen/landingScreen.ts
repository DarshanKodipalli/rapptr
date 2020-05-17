import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landingScreen.html',
  styleUrls: ['./landingScreen.scss']
})

export class LandingScreenComponent{
	public whoLoggedIn:String = "";
  constructor(private route:Router,private app:AppComponent){

  }
  loginScreen(){
    this.app.setLoggedIn();
    var loginData = {
      isLoggedIn:true
    };
    localStorage.setItem('login',JSON.stringify(loginData));
//    this.route.navigate(['/login']);          
  }
}
