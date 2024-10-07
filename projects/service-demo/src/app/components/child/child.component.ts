import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //parent to child
@Input() public msgFromParent:string="";
@Input() public studentObjects:any[] = [];
@Input() public stuFlag:boolean = false;
@Input() public msgFlag:boolean = false;

//child to parent
@Output() public childClick:EventEmitter<string> = new EventEmitter<string>();
 
public ChildButtonClick(){
  this.childClick.emit("Hello! From Child");
}
}
