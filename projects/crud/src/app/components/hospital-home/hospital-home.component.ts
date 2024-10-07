import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { DoctorContract } from '../../contracts/doctor.contract';

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.css']
})
export class HospitalHomeComponent {
    
    constructor(private service:DoctorService){}

    public doctors:DoctorContract[] = [];
    public flag:boolean = false;
    public query:string = '';
    public showSearchRecord:boolean = false;

    public doctor:DoctorContract = {
      "docId":0,
      "docName":'',
      "income":0,
      "specialization":''
    }

    public Load():void{
        this.service.GetAllDoctors().subscribe(data=>{
          this.doctors = data;
          this.flag = true;
          this.showSearchRecord = false;
        });
    }
    SortByName(){
      this.doctors.sort((a, b) => a.docName.localeCompare(b.docName));
    }
    SortById(){
      this.doctors.sort((a, b) => a.docId - b.docId);
    }
    SortByIncome(){
      this.doctors.sort((a, b) => b.income - a.income);
    }
    SortBySpecialization(){
      this.doctors.sort((a, b) => b.specialization.localeCompare(a.specialization));
    }
    OnSearch(){
       let docId = parseInt(this.query,10);
       this.service.GetDoctorById(docId).subscribe(res=>{
        this.doctor = res;
        this.flag = false;
        this.showSearchRecord = true;
       })
       console.log(docId);
    }
}
