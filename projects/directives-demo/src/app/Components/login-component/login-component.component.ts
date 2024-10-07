import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  greenBg:boolean = true;
  redBg:boolean = false;
   
  public LoginFunction(event:any): void{
      let name = event.target.value;
     if(name!="" && name!=undefined){
         this.redBg = true;
     }
}
}
