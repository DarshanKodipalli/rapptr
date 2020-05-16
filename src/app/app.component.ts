import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  loggedIn:boolean = false;

  constructor() {
    if(localStorage.getItem('login')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  setLoggedIn(){
    this.loggedIn = true;
  }

  removeLoggedIn(){
    this.loggedIn = false;
  }

}
