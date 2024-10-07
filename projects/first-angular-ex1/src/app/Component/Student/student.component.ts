import { Component } from "@angular/core";
@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})
export class StudentComponent{
     sId:number=100001;
     sName:string="Rajendra";
     branch:string="Electrical Engg.";
     subject:string="Electro Magnetic Theory";
}