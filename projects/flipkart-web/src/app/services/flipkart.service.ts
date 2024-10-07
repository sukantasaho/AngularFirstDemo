import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductContarct } from "../contracts/fakeproduct.contract";


@Injectable({providedIn:'root'})

export class FlipkartService{
   constructor(private http:HttpClient){

   }
   public GetProducts():Observable<ProductContarct[]>{
    return this.http.get<ProductContarct[]>('https://fakestoreapi.com/products');
   }

   public GetProductById(id:number):Observable<ProductContarct>{
    return this.http.get<ProductContarct>(`https://fakestoreapi.com/products/${id}`);
   }

   public GetCategories():Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
   }

   public GetProductsBasedOnCategoryName(categoryName:string):Observable<ProductContarct[]>{
    return this.http.get<ProductContarct[]>(`https://fakestoreapi.com/products/category/${categoryName}`);
   }
   
}