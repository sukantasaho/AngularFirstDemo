import { Component } from '@angular/core';
import { FlipkartService } from '../../services/flipkart.service';
import { ProductContarct } from '../../contracts/fakeproduct.contract';

@Component({
  selector: 'app-flipkart-home',
  templateUrl: './flipkart-home.component.html',
  styleUrls: ['./flipkart-home.component.css']
})
export class FlipkartHomeComponent {

  public products:ProductContarct[] = [];
  public itemsFound:number = 0;
  constructor(private service:FlipkartService){

  }
  public ngOnInit(){
    this.service.GetProducts().subscribe(data=>{
      this.products = data;
    })
    this.itemsFound = this.products.length;
  }
}
