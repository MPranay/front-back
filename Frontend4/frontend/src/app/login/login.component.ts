import { Component } from '@angular/core';
import { login } from '../model/login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?:string;
  password?:string;
  data: login = new login();
  submitMessage: any;
  constructor(private authService :AuthService){}
  loginU(){
    this.data.username=this.username;
    this.data.password=this.password;
    this.authService.authenticateUser(this.data).subscribe(res=>{
      console.log(res)
      this.authService.setBearerToken(res);
    }, err => {
      
      if ( err.status === 403) {
        this.submitMessage = err.error.message;
        console.log('Invalid credentials');
      }else {
        this.submitMessage = err.message;
        console.log('404 error');
      }})
  }
  logout(){
    this.authService.logoutop();
  }
}
