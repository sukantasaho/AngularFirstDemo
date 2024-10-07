import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent {
   public product:any = {
        Name:"iPhone 15",
        Price:56000,
        Image:'assets/iPhone.webp'
   }
   public preview : boolean = true;
}
