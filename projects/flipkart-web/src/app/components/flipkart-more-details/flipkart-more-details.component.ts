import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlipkartService } from '../../services/flipkart.service';
import { ProductContarct } from '../../contracts/fakeproduct.contract';

@Component({
  selector: 'app-flipkart-more-details',
  templateUrl: './flipkart-more-details.component.html',
  styleUrls: ['./flipkart-more-details.component.css']
})
export class FlipkartMoreDetailsComponent {

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
     constructor(private router:ActivatedRoute, private service:FlipkartService){

     }
     ngOnInit(){
      this.id = this.router.snapshot.paramMap.get('id');
      this.service.GetProductById(this.id).subscribe(data=>{
        this.product = data;
      })
       
     }
}
