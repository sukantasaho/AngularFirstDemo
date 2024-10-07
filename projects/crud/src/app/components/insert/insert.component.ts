import { Component } from '@angular/core';
import { DoctorContract } from '../../contracts/doctor.contract';
import { DoctorService } from '../../services/doctor.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

    public doctor:DoctorContract={
      "docId":0,
      "docName":'',
      "income":0,
      "specialization":''
    };
     
    //public response:string | null = null;
    public response:any={
      "message":''
    }
    constructor(private service : DoctorService){}
    public success:boolean=false;
    public specializations:string[] = [];
    ngOnInit(){
       this.service.DisplayAllSpecializations().subscribe(res=>{
        this.specializations = res;
       },(error)=>{
         console.log(error);
       })
    }
    SaveDoctor(){
      console.log(JSON.stringify(this.doctor));
      this.service.Save(this.doctor).subscribe(res=>{
        this.response = res;
      },(error)=>{
        console.log(error);
      })
      this.success = true;
      console.log(JSON.stringify(this.response));
    }
    public specialization:string = '';
    ChangeSpecialization(spe:string):void{
            //this.specialization = spe;
            this.doctor.specialization = spe;
    }
    public Hide(){
      this.success = false;
    }
}
