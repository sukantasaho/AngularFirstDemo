import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {
   product:any={
      productId:101,
      productName:"Raja",
      stock:true,
      price:12000
   };
   tableHeight:number=100;
   tableWidth:number=1000;
   tableBorder:number=2;
}
