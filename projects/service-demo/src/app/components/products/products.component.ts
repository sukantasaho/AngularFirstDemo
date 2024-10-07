import { Component } from '@angular/core';
import { FakeStoreService } from '../fake-store.service';
import { ProductInfo } from '../ProductInfo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products:ProductInfo[] = [];
  public categories:string[] = [];
  public flag:boolean = false;
   
  constructor(private service:FakeStoreService){

   }
   public GetGridData(){
      this.service.LoadProducts('https://fakestoreapi.com/products').subscribe(res=>{
        this.products = res;
      },error =>{
        console.log('error occuring while calling api');
      });
      this.flag = this.flag==false?true:false;
       
   }
   public GetProductInfoBasedOnCategoryName(categoryName:string){
        this.service.LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`).subscribe(res=>{
          this.products = res;
        });
        this.flag = true;
         
   }
   public GetCategories(){
         this.service.GetCategories().subscribe(res=>{
          this.categories = res;
         })
   }
   /*public ngOnInit(){
    this.service.GetAllProducts().subscribe(res=>{
      this.products = res;
    });
   }*/
  
   
}
