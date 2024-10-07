import { Component } from "@angular/core";

@Component({
    selector:'app-employee',
    template:`
      <h1>Welcome to First Angular Development</h1>
      <hr>
       
      <dl>
        <dt>Employee Id</dt>
        <dd>{{eId}}</dd>
        <dt>Employee Name</dt>
        <dd>{{eName}}</dd>
        <dt>Employee Sal</dt>
        <dd>{{eSal}}</dd>
      </dl>
       
    `,
    styles:['h1{color:green;text-align:center}']
})
export class EmployeeComponent{
    eId:number = 101;
    eName:string = "Manoj Sahoo";
    eSal:number=12000;
    
}