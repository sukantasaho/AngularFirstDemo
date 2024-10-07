import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
    prodId:number=3001;
    prodName:string="Apple iPhine 15";
    prodCity:string="Bangalore";
    prodStock:boolean=false;
    prodPrice:number=34000;
}
