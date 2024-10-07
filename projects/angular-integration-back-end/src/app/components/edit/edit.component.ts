import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { DoctorContract } from '../../contract/doctor.contract';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public id:any = '';
      
  public doctor:DoctorContract = {
    "docId":0,
    "docName":'',
     "income":0,
     "specialization":''
  }
     constructor(private router:ActivatedRoute, private service:DoctorService){}

    
     ngOnInit(){
      this.id = this.router.snapshot.paramMap.get('docId');
      this.service.GetExitData(this.id).subscribe(data=>{
        this.doctor = data;
      })
     }
}
