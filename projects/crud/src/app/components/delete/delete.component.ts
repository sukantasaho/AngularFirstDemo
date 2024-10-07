import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

    public success:boolean = false;
    public docId:any = 0;
    public response:any={
      "message":''
    }
     constructor(private router:ActivatedRoute, private service : DoctorService){}
     
     ngOnInit(){
      this.docId = this.router.snapshot.paramMap.get('docId');
      this.service.RemoveDoctorById(this.docId).subscribe(res=>{
        this.response = res;
        this.success = true;
      })
     }
     public Hide(){
        this.success = false;
     }
}
