import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-for-example',
  templateUrl: './simple-for-example.component.html',
  styleUrls: ['./simple-for-example.component.css']
})
export class SimpleForExampleComponent {
   public courses = ["core java", "advance java","Hibernate","spring","spring boot","oracle","microservices","mysql","mongoDB","Restful Services","AWS","HTML","CSS","Bootstrap","JS","TypeScript","Angular","Data Structure","Unix/Linux"];

     public productsList:any = 
     [
         {
            category:"Electronics", products:["Apple iPhone","MI LED","LG Regrigerator","Washing Machine","Inverter"]
         },
         {
            category:"Fasion", products:["T-shirt","Chinos Paint","Saree"]
         }
     ];  

    public empList = 
    [
       {
         "eid":101,
         "ename":"Sukanta",
         "esal":23000
       },
       {
        "eid":102,
        "ename":"Rajip",
        "esal":19000
       },
      {
      "eid":103,
      "ename":"Manoj",
      "esal":27000
      },
      {
        "eid":104,
        "ename":"Saroj",
        "esal":34000
      },
      {
        "eid":105,
        "ename":"Sanjib",
        "esal":45000
      }
    ]
}
