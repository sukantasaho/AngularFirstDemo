import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.css']
})
export class CustomPipeDemoComponent {
      public emps:any[] = [
        {eid:101,ename:"Sukanta",gender:"Male"},
        {eid:102,ename:"Banalaxmi",gender:"Female"},
        {eid:103,ename:"Rajip",gender:"Male"},
        {eid:104,ename:"Anita",gender:"Female"},
        {eid:105,ename:"Anshika",gender:"Female"}
      ]
}
