import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent {
   //flag:boolean = false;
   public product:any = {
    Name:"iPhone 15",
    Price:56000,
    Image:'assets/iPhone.webp',
    Description:"iPhone is a good mobile, Which is more secure"
  }
  btnText:string = "Description";
  toggle:boolean = true;
  toggleButton(){
    this.toggle = (this.toggle==true)?false:true;
    this.btnText = (this.btnText=="Description")?"Preview":"Description";
  }
}
