import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="surya" && password=="1234"){
      sessionStorage.setItem('username',username);
      return true;
    }

    else{
      return false;
      
    }
  }
  isUserLoggedIn(){
    console.log("Doctor has logged in")
    let user=sessionStorage.getItem('username');
    console.log(user)
    return !(user==null);

  }

  logout(){
    console.log("Docter has logged out")
    sessionStorage.removeItem('username');
  }


}
