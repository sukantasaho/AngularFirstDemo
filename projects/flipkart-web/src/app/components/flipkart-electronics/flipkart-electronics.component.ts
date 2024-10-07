import { Component } from '@angular/core';
import { ProductContarct } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';

@Component({
  selector: 'app-flipkart-electronics',
  templateUrl: './flipkart-electronics.component.html',
  styleUrls: ['./flipkart-electronics.component.css']
})
export class FlipkartElectronicsComponent {
   
  public products:ProductContarct[] = [];
  constructor(private service : FlipkartService){
        
  }
  ngOnInit(){
    this.service.GetProductsBasedOnCategoryName('electronics').subscribe(data=>{
      this.products = data;
    });
  }
}
