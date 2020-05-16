import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string="";
  public loginData:any = {};
  public signUpData:any = {};
  constructor(private app: AppComponent,
            private http: RestService,
            private router: Router ) { 
    this.signUpData.username = "testuser";
    this.signUpData.password = "Test123";
    this.signUpData.email = "test@rapptrlabs.com";
    console.log(this.signUpData);
  }

  ngOnInit() {

    this.loginData.email = "test@rapptrlabs.com";
    this.loginData.password = "Test123";
    setTimeout(() => {
      this.app.removeLoggedIn();
    } , 0);
    
  }

  login(loginData){

/*    this.app.setLoggedIn();
    localStorage.setItem('login',JSON.stringify(loginData));
    this.router.navigate(['/landing']);          
*/
    this.http.signIn(loginData).subscribe(
      (response)=>{
        console.log(response.json());
        localStorage.setItem("login",JSON.stringify(loginData));
          this.router.navigate(['/landing']);          
          console.log(loginData);        
        },(error)=>{
        console.log(error);
      }
    );
  }

  signUpFunction(signUpData){
    window.alert("User Signed up!");

/*    this.http.registerUser(signUpData).subscribe(
      (response)=>{
        console.log(response.json());
        window.alert("User Registered! Please login to Book a cab.");
      },(error)=>{
        console.log(error);
      })*/
  }
}
