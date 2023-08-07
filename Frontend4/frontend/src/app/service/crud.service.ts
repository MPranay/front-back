import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';
import { login } from '../model/login';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL:string;
  constructor(private http:HttpClient, private authService:AuthService) { 
    this.serviceURL = "http://localhost:8084/"
    
  }
  registerUser(user :User):Observable<string>{
    return this.http.post(this.serviceURL+"register",user,{ responseType: 'text' });
  }


  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.serviceURL+"api/v1/userservice/users",{headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)})
  }


}
