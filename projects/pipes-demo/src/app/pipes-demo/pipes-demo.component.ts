import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
    message:string = "Welcome To NareshIT";
    price:number = 377739494.73993;
    mfd:Date = new Date('2024-04-15');
    rate:number = 0.234;
    public product:{
        name:string,
        price:number
    }={
      name:"Sukanta",
      price:67388
    }
    fruits:String[] = ["mango","apple","banana","grapes","jackfruit","pomegranate","pineapple"];

  public productList=[
    {"Name":"Samsung A52S","ShippedTo":"Delhi"},
    {"Name":"Samsung M13","ShippedTo":"Hyderabad"},
    {"Name":"Samsung A52S","ShippedTo":"Bangalore"},
    {"Name":"Samsung A52S","ShippedTo":"Odisha"}
  ]
  public status={
    "Delhi":"Delivery in 2 Days",
    "Hyderabad":"Same Day Delivery",
    "Bangalore":"1 Day Delivery",
    "Odisha":"Dispatched in 3-4 working days"
  }

  }
