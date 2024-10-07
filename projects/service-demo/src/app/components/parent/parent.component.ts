import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public msg:string="";
public messageFlag:boolean = false;
public studentFlag:boolean = false;

public students:any[] = []
public SendClick(){
  this.msg = "Hello From Parent";
  this.students = [
  {id:101,name:"sukanta",branch:"electrical"},
  {id:102,name:"rajip",branch:"mechanical"},
  {id:103,name:"sanjib",branch:"electrical"},
  {id:104,name:"rakesh",branch:"civil"},
  {id:105,name:"suriya",branch:"electrical"},
  {id:106,name:"allu",branch:"computer science"}
  ];
  
  this.studentFlag = this.studentFlag==false?true:false;

}
public msgFromChild:string = "";
public childFlag:boolean = false;
public GetMessageFromChild(e:any){
      this.msgFromChild = e;
      this.childFlag = this.childFlag==false?true:false;
}
}
