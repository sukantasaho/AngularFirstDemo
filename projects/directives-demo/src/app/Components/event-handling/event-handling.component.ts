import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent {

  public StudentFormJson:{
    "firstName":string,
    "lastName":string,
    "email":string,
    "mob":string
  }={
    "firstName":"",
    "lastName":"",
    "email":"",
    "mob":""
  }
  Validate(val:any){
     //console.log(val);
     this.StudentFormJson = val;
     console.log(this.StudentFormJson);
  }
}
