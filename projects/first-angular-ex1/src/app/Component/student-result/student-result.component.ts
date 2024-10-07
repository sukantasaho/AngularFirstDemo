import { Component } from '@angular/core';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent {
    stdId:number=5001;
    stdName:string="Sukanta";
    sub1:number=45;
    sub2:number=56;
    sub3:number=67;
    marks:number=0;
    averageMark:number=0;
    result:string="";
    
    calculation()
    {
        this.marks = this.sub1+this.sub2+this.sub3;
        this.averageMark = this.marks/3;
        this.result = this.publishResult(this.averageMark);
    }
    publishResult(averageMark:number):string
    {
        if(this.averageMark<35)
        {
          return "Fail";
        }
         else
         {
           return "Pass";
         }
     
    }
}

