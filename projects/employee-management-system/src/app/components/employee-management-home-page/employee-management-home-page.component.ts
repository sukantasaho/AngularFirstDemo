import { Component } from '@angular/core';
import { Employee } from '../../contract/employee.contract';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-management-home-page',
  templateUrl: './employee-management-home-page.component.html',
  styleUrls: ['./employee-management-home-page.component.css']
})
export class EmployeeManagementHomePageComponent {
  public employees:Employee[] = [];
  constructor(private service:EmployeeService){}
  DisplayEmployees(){
    this.service.GetAllEmployees().subscribe(res=>{
      this.employees = res;
    })
  }
}
