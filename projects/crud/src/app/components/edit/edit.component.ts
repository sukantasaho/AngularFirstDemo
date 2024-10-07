import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { DoctorContract } from '../../contracts/doctor.contract';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public docId:any=0;
  public doctor:DoctorContract={
    "docId":0,
    "docName":'',
    "income":0,
    'specialization':''
  }
  public editFlag:boolean=false;
  public success:boolean=false;
  constructor(private router : ActivatedRoute, private service:DoctorService){}
  public response:any = {
    "message":''
  }
   
  ngOnInit(){
   this.docId = this.router.snapshot.paramMap.get('docId');
   this.service.GetDoctorById(this.docId).subscribe(res=>{
    this.doctor = res;
    this.editFlag = true;
    console.log(JSON.stringify(this.doctor));
   })
   
  }

  UpdateDoctor(){
     
     this.service.Update(this.doctor).subscribe(res=>{
      this.response = res;
     })
     this.editFlag = true;
     this.success = true;
  }
  Hide(){
    this.success = false;
   }
 
}
