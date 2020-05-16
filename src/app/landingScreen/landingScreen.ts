import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landingScreen.html',
  styleUrls: ['./landingScreen.scss']
})

export class LandingScreenComponent{
	public whoLoggedIn:String = "";
  constructor(){
    console.log("Landing Screen Component");
    this.whoLoggedIn = JSON.parse(localStorage.getItem('login')).email;
  }
}
