import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OTPResponseContract } from '../contract/otp-response-contract';

@Injectable({
  providedIn: 'root'
})
export class OTPService {


  constructor(private http:HttpClient) { }

  public sendOTP(mobNumber:string):Observable<OTPResponseContract>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
     return this.http.post<OTPResponseContract>(`http://localhost:4343/api/send/${mobNumber}`,headers);
  }

  public VerifyOTP(otp:string):Observable<boolean>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<boolean>(`http://localhost:4343/api/verifyOTP/${otp}`,headers);
  }
}
