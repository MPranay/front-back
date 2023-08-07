import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  x:any;
  authUrl="http://localhost:8084/"

  constructor(private http:HttpClient) { }

  authenticateUser(data:any) {
    return this.http.post(this.authUrl+"login", data);
  }

  setBearerToken(token:any) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('message',token.message)
  }

  getBearerToken() {
    return localStorage.getItem('token');
  }
  logoutop(){
    localStorage.setItem('token',"")
    localStorage.setItem('message',"")
  }
  isUserAuthenticated() {
    this.x =localStorage.getItem('message')
    if( this.x == "User Successfully logged in"){
      return true;
    }
    else{
      return false;
    }

   }
}
