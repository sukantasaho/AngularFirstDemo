import { Component } from '@angular/core';
import { FlipkartService } from '../../services/flipkart.service';
import { ProductContarct } from '../../contracts/fakeproduct.contract';

@Component({
  selector: 'app-flipkart-jewelery',
  templateUrl: './flipkart-jewelery.component.html',
  styleUrls: ['./flipkart-jewelery.component.css']
})
export class FlipkartJeweleryComponent {
     
     public products:ProductContarct[] = [];
    constructor(private service : FlipkartService){
          
    }
    ngOnInit(){
      this.service.GetProductsBasedOnCategoryName('jewelery').subscribe(data=>{
        this.products = data;
      });
    }
}
