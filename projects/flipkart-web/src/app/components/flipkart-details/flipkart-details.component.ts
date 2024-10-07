import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductContarct } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';

@Component({
  selector: 'app-flipkart-details',
  templateUrl: './flipkart-details.component.html',
  styleUrls: ['./flipkart-details.component.css']
})
export class FlipkartDetailsComponent {
    
       public id:any = '';
      
       public product:ProductContarct = {
        "id":0,
        "title":'',
        "price":0,
        "description":'',
        "category":'',
        "image":'',
        "rating":{
          "rate":0,
          "count":0
        }
       }
      constructor(private route : ActivatedRoute, private service : FlipkartService){
           
      }
     public ngOnInit(){
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.GetProductById(this.id).subscribe(data=>{
        this.product = data;
      })
     
     }

        
}
