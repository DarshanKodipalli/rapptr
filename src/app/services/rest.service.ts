import { Injectable } from '@angular/core';
import { Http,ResponseContentType } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private loginData:any = {};  
  constructor(private http: Http) {
      this.loginData = localStorage.getItem("login")  
  }
  
  SignUp(signUpData){
    return this.http.post("http://dev.rapptrlabs.com/Tests/scripts/user-signup.php",signUpData,{withCredentials: true});
  }  

  signIn(signInData){
    console.log(signInData);
    return this.http.post("http://dev.rapptrlabs.com/Tests/scripts/user-login.php", signInData);
  }
  registerUser(data){
    return this.http.post("http://localhost/rideshare/Login", data);
  }
}