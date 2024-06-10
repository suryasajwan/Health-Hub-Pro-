import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private adminAuthService:AdminauthService, private router:Router) { }

  canActivate() {
      
    if(this.adminAuthService.isUserLoggedIn()){

      return true;
    }

    else{
        this.router.navigate(['adlogin'])
        return false;
    }

  }
}
