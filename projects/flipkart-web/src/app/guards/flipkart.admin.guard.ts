import { Injectable } from "@angular/core";
import {CanActivate,Router} from "@angular/router";
 

@Injectable({providedIn:'root'})

export class FlipkartAdminGuard implements CanActivate{
    public userRole:string = "customer";

    constructor(private route : Router){}

    canActivate(): boolean {
        if(this.userRole!=="admin"){
            this.route.navigate(['login']);
        }
        return true;
    }
}