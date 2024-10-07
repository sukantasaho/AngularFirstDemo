import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

     public registrationForm = new FormGroup({
        username : new FormControl("Sukanta"),
        age : new FormControl(0),
        mobile:new FormControl(""),
        isActive:new FormControl(""),
        gender:new FormControl(""),
        course:new FormControl(""),
        email:new FormControl(""),

     });
     Register(data:any){
       console.log(JSON.stringify(data));
       
     }
}
