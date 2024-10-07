import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
       empId:number = 101;
       empName:string = "Banalaxmi";
       empSalary:number = 34000;
       ChangeData(){
        this.empId = 105;
        this.empName = "Muktikanta";
        this.empSalary = 70000;
       }
}
