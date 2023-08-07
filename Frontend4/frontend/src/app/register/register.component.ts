import { Component,OnInit } from '@angular/core';
import { User } from '../model/user';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private crudservice:CrudService){}
  UserObj : User =new User();
  userId: string ='';
  address: string ='';
  username: string ='';
  password: string ='';
  ngOnInit(){
    this.UserObj=new User()
  }
  register() {
    this.UserObj.userId=this.userId;
    this.UserObj.username=this.username;
    this.UserObj.password=this.password;
    this.UserObj.address=this.address;
    this.crudservice.registerUser(this.UserObj).subscribe(res=>{
      this.ngOnInit();
      const textResponse = res;
      console.log(textResponse);
    });
    
  }

  clearInputs() {
    this.userId=''
    this.username = '';
    this.password = '';
    this.address=''
  }



}
