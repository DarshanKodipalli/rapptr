import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  loggedIn:boolean = false;

  constructor(private route : Router) {
    if(localStorage.getItem('login')){
      console.log("True")
      this.loggedIn = true;
    }else{
      console.log("false")
      this.loggedIn = false;
    }
  }

  setLoggedIn(){
    console.log("Login Called");
    this.loggedIn = true;
    this.route.navigate(['login'])
  }
  removeLoggedIn(){
    this.loggedIn = false;
  }

}
