import { UserAuthentication } from 'src/services/loginService';

import { Injectable } from "@angular/core";
import { CanLoad ,UrlSegment, Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";


@Injectable({
    providedIn: 'root' // ADDED providedIn root here.
  })

export class AuthGuardService implements CanActivate {


    constructor(private router:Router) { }
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
        // return true;
        // if(UserAuthentication.isLoggedIn)
        // console.log(" url = " + state.url);
        // console.log(" local= " + localStorage.getItem("sessionUser"))
        if(localStorage.getItem("sessionUser")=="1")
        {
          // this.router.navigateByUrl(state.url);
          return true;
        }

        this.router.navigate(["/login"]);
        return false;

    }
  
  }