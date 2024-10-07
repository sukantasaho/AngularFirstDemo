import { Component } from '@angular/core';
import { DoctorService } from '../../service/doctor.service';
import { DoctorContract } from '../../contract/doctor.contract';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public doctors:DoctorContract[] = [];
   constructor(private service : DoctorService){}
   ngOnInit(){
    this.service.GetAllDoctors().subscribe(data=>{
      this.doctors = data;
    })
   }
   Edit(id:any){

   }
}
