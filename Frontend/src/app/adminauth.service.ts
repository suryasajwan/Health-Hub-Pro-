import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="john" && password == "12345" ){
      sessionStorage.setItem('username2',username);
      return true;
    }

    else{
      return false;
    }
  

  }

  isUserLoggedIn(){
    console.log("User has logged in")
    let user=sessionStorage.getItem('username2');

    return !(user==null)


  }

  logout(){
    console.log("User has logout")
    sessionStorage.removeItem('username2');
  }
  

}
