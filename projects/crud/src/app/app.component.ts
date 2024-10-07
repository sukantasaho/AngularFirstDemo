import { Component } from '@angular/core';
import { DoctorContract } from './contracts/doctor.contract';
import { DoctorService } from './services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  public doctors:DoctorContract[] = [];
  public flag:boolean = false;
  public searchFlag:boolean = false;
  constructor(private route:ActivatedRoute, private service : DoctorService){}

   public DisplayAllDoctors(){
    this.service.GetAllDoctors().subscribe(data=>{
      this.doctors = data;
      this.flag = this.flag==false?true:false;
    })
   }
   public GetDoctor(event:any){
       let val = event.target.name("id").value;
       console.log(val);
   }

   public query: string = '';
  public doctor:DoctorContract = {
       "docId":0,
       "docName":"",
       "income":0,
       "specialization":""
  }

  onSearch(): void {
    if (this.query.trim()) {
      this.service.search(this.query).subscribe(data => {
         this.doctor = data;
      },
        error => {
          console.error('Error fetching search results', error);
        }
      );
    }
    this.searchFlag = this.searchFlag==false?true:false;
  }
  //Get Edit Data When click on Edit Button
  // public editFlag:boolean=false;
  // GetEditData(docId:any){
  //   this.service.GetDoctorById(docId).subscribe(data=>{
  //     this.doctor = data;
  //   });
  //   this.editFlag = this.editFlag==false?true:false;
  // }
  // public message:string = '';
  // Delete(docId:any){
  //     this.service.RemoveDoctorById(docId).subscribe(data=>{
  //       this.message = data;
  //     })
  // }
}
