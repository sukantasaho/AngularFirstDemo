import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //this is called model
       public product = {
          productId:102,
          productName:"Netflix",
          isAvailable:false,
          imageUrl:"assets/netflix.jpg"
       }
}
