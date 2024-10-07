import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorContract } from '../contract/doctor.contract';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  public GetAllDoctors():Observable<DoctorContract[]>{
    return this.http.get<DoctorContract[]>('http://localhost:5050/api/getAllDoctors');
  }
  public GetExitData(id:any):Observable<DoctorContract>{
    return this.http.get<DoctorContract>(`http://localhost:5050/api/getSingleDoctor?id=${id}`);
  }
}
