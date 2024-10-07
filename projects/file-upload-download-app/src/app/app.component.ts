import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface User{
  "id":number,
  "userName":string,
  "displayPicture":string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'FileUploadDownloadApp';
  public userDetails:User[] = [];
  public user:User = {
  "id":0,
  "userName":'',
  "displayPicture":''
  }
  public userName!: string;
  public selectedFile!: File;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
     this.http.get<User[]>("http://localhost:6070/api/getAllPics").subscribe(res=>{
      this.userDetails = res;
     }, error=>{
      console.log("error occured while fetching user list");
     });
  }
  OnFileSelected(event:any){
     this.selectedFile = event.target.files[0];
  }
  Save():void{
    const formData = new FormData();
    formData.append("name",this.userName);
    formData.append("file",this.selectedFile);
    this.http.post("http://localhost:6070/api/user", formData).subscribe(resp=>{
      console.log("saved Success");
       console.log(resp);
    },error=>{
         console.log("error");
    });
  }
}
