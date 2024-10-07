import { Component } from '@angular/core';

@Component({
  selector: 'app-key-event-demo',
  templateUrl: './key-event-demo.component.html',
  styleUrls: ['./key-event-demo.component.css']
})
export class KeyEventDemoComponent {
   userError:string = "";
   isInvalid:boolean = false;
   isPasswordWarnVisible:boolean=false;

  public users:any[] = [
    {username:"suksahoo1992@gmail.com"},
    {username:"suksahoo1993@gmail.com"},
    {username:"suksahoo1996@gmail.com"},
    {username:"suksahoo10@gmail.com"},
    {username:"suksahoo80@gmail.com"},
  ]
  VerifyUser(user:any){
       let userName = user.target.value;
       
       for(let user of this.users){
             if(user.username==userName){
                    this.userError = "User is already taken. pls try another";
                    this.isInvalid = true;
                    break;
             }
             else{
              this.userError = "User is available";
              this.isInvalid = false;
             }
       }
       
  }
  public VerifyPassword(e:any){
      if(e.keyCode>=65 && e.keyCode<=90){
         this.isPasswordWarnVisible = true;
      }
      else{
        this.isPasswordWarnVisible=false;
      }
  }
}
