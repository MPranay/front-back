import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { User } from '../model/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  UserArr: User [] = []

  constructor(private crudservice:CrudService){ 
    this.getUserServiceData();
  }
  getUserServiceData(){
    this.crudservice.getAllUser().subscribe(res=>{
      this.UserArr = res;
    })
  }

  displayedColumns: string[] = ['userId', 'username', 'password', 'address'];
  dataSource ?:any;
}
