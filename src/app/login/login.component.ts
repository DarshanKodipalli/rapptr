import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
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

    if(loginData.email === 'test@rapptrlabs.com' && loginData.password === 'Test123'){
      Swal({
        title: 'Valid login credentials',
        text: 'The login credentials for '+loginData.email+' were entered correctly!',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: 'Okay',
      }).then((result) => {
          console.log("Do Nothing");
      },(error)=>{
          console.log(error);
        })      
    }else{
      Swal({
        title: 'Invalid login credentials',
        text: 'The login credentials entered were incorrect!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Okay',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        console.log("Do Nothing");
      },(error)=>{
          console.log(error);
        })            
    }
  }
/*    this.http.signIn(loginData).subscribe(
      (response)=>{
        console.log(response.json());
        localStorage.setItem("login",JSON.stringify(loginData));
          this.router.navigate(['/landing']);          
          console.log(loginData);        
        },(error)=>{
        console.log(error);
      }
    );*/

  signUpFunction(signUpData){
    Swal({
      title: 'User Signup',
      text: 'A new user : '+signUpData.username+' is added successfully!',
      type: 'success',
      showCancelButton: true,
      confirmButtonText: 'Okay',
    }).then((result) => {
      this.signUpData.username = "";
      this.signUpData.email = "";
      this.signUpData.password="";
      console.log("Do Nothing");
    },(error)=>{
        console.log(error);
  })    

/*    this.http.registerUser(signUpData).subscribe(
      (response)=>{
        console.log(response.json());
        window.alert("User Registered! Please login to Book a cab.");
      },(error)=>{
        console.log(error);
      })*/
  }
}
