import { Component } from '@angular/core';
import { ProductContarct } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';

@Component({
  selector: 'app-flipkart-womens',
  templateUrl: './flipkart-womens.component.html',
  styleUrls: ['./flipkart-womens.component.css']
})
export class FlipkartWomensComponent {

  public products:ProductContarct[] = [];
    constructor(private service : FlipkartService){
          
    }
    ngOnInit(){
      this.service.GetProductsBasedOnCategoryName('women\'s clothing').subscribe(data=>{
        this.products = data;
      });
    }
}
