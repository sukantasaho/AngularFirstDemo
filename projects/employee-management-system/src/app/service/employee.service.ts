import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../contract/employee.contract';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseUrl:string = "http://localhost:5050/api";
  constructor(private http:HttpClient) { }
  
  public GetAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/getAllEmployees`);
  }
}
