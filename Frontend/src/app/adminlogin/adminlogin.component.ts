import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

   username:string="";
   password:string = "";
   invalidLogin=false;

    constructor(private adminAuthService:AdminauthService,private router:Router){}

    checkLogin(){
      if(this.adminAuthService.authenticate(this.username,this.password)){
        this.router.navigate(['admin'])
        this.invalidLogin=false;
      }
      else{
        this.invalidLogin=true;
        alert("Invalid Credentials")
        this.router.navigate(['home'])
      }
    }
   

}
