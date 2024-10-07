import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorContract } from 'projects/angular-integration-back-end/src/app/contract/doctor.contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  public header = new Headers()
  .set('content-type','application/json');
  public baseUrl:string='http://localhost:5050/api';

  constructor(private http : HttpClient) {}

  public GetAllDoctors():Observable<DoctorContract[]>{
    return this.http.get<DoctorContract[]>(`${this.baseUrl}/getAllDoctors`);
  }
  public GetDoctorById(docId:number):Observable<DoctorContract>{
    return this.http.get<DoctorContract>(`${this.baseUrl}/getSingleDoctor?id=${docId}`);
  }
  public RemoveDoctorById(docId:number):Observable<string>{
    return this.http.delete<string>(`${this.baseUrl}/delete?docId=${docId}`);
  }
  public GetDoctorsByName(name1:string,name2:string):Observable<DoctorContract[]>{
    return this.http.get<DoctorContract[]>(`${this.baseUrl}/getDoctorsByName/${name1}/${name2}`);
  }

  public GetDoctorsByIds(ids:[]){

  }
  public Save(doctor:DoctorContract):Observable<string>{

       return this.http.post<string>(`${this.baseUrl}/register`,doctor);
  }
  public Update(doctor:DoctorContract):Observable<string>{
    return this.http.put<string>(`${this.baseUrl}/update`,doctor);
  }
  public search(query:String):Observable<DoctorContract>{
    return this.http.get<DoctorContract>(`${this.baseUrl}/getSingleDoctor?id=${query}`);
  }
  public DisplayAllSpecializations():Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}/getAllSpecializations`);
  }

}
