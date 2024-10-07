import { Component } from '@angular/core';
import { OTPService } from './service/otp.service';
import { OTPResponseContract } from './contract/otp-response-contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isOTPVerified:boolean = false;
   flag1:boolean = true;
   flag2:boolean = false;
   mobNumber:string = "+91 ";
   constructor(private service:OTPService){}
   otpSendingStatus:boolean = false;
   msg:string="";
  otpResponse:OTPResponseContract = {
    message:"",
    status:false
  }
   public SendOTP(){
      this.service.sendOTP(this.mobNumber).subscribe(res=>{
        this.otpSendingStatus = true;
        this.otpResponse = res;
        this.flag1 = false;
        this.flag2 = true;
      })
   }
   otp:string = "";
   public VerifyOTP(){
     this.service.VerifyOTP(this.otp).subscribe(res=>{
      this.isOTPVerified = res;
      this.otpResponse.status = false;
      this.flag2 = false;
     })
   }
}
