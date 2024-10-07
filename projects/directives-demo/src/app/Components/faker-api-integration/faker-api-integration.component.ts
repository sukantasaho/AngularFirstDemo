import { Component } from '@angular/core';

@Component({
  selector: 'app-faker-api-integration',
  templateUrl: './faker-api-integration.component.html',
  styleUrls: ['./faker-api-integration.component.css']
})
export class FakerApiIntegrationComponent {
  
      public produstObjects:any =[];
      public templateViewType="CardView";
      public flag:boolean = true;
      // GetAllProducts(){
      //   fetch('https://fakestoreapi.com/products')
      //       .then(response=> response.json())
      //       .then(data=>{
      //         this.produstObjects = data;
      //       })
      // }
      ngOnInit(){
        fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(data=>{
               this.produstObjects = data;
              })
     }
      SwitchTemplateViewMode(){
        this.templateViewType = this.templateViewType=="TableView"?"CardView":"TableView";
        this.flag = this.flag==true?false:true;
        console.log(this.templateViewType);
      }
}
