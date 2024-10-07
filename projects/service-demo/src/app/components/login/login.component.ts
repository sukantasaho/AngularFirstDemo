import { Component, OnInit } from '@angular/core';
import { OtpService } from '../../services/otp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public otp:string = "";
  //injection
  constructor(private serv:OtpService){

  }
  ngOnInit(): void {
    this.otp = this.serv.GenerateOTP();
  }
  public NewOTP(){
    this.otp = this.serv.GenerateOTP();
  }


}
