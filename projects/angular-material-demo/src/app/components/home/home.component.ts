import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public Title():string{
    return "Amazon Cart";
  }
  public CalculateTotalPrice(price:number, qty:number):number{
     return price*qty;
  }
}
