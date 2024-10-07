import { Component } from '@angular/core';
import { ProductContarct } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';

@Component({
  selector: 'app-flipkart-mens',
  templateUrl: './flipkart-mens.component.html',
  styleUrls: ['./flipkart-mens.component.css']
})
export class FlipkartMensComponent {

  public products:ProductContarct[] = [];
    constructor(private service : FlipkartService){
          
    }
    ngOnInit(){
      this.service.GetProductsBasedOnCategoryName('men\'s clothing').subscribe(data=>{
        this.products = data;
      });
    }
}
