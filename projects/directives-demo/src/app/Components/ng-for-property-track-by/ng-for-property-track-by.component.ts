import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-property-track-by',
  templateUrl: './ng-for-property-track-by.component.html',
  styleUrls: ['./ng-for-property-track-by.component.css']
})
export class NgForPropertyTrackByComponent {

  public emps:any = [
    {"eid":101,"ename":"Sukanta","esal":10000},
    {"eid":102,"ename":"Rajip","esal":20000},
    {"eid":103,"ename":"Anita","esal":30000}
  ];

  // this is not recomonded because it update complete tbody
  GetUpdatedData(){
    this.emps = [
         {"eid":101,"ename":"Sukanta","esal":10000},
         {"eid":102,"ename":"Rajip","esal":20000},
         {"eid":103,"ename":"Anita","esal":30000},
         {"eid":104,"ename":"Rajip","esal":50000}
     ];
  }
  recordChanges(index:number):number{
     return index;
  }
}
