import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInfo } from './ProductInfo';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private http:HttpClient) { }
  public LoadProducts(url:string):Observable<ProductInfo[]>{
    return this.http.get<ProductInfo[]>(url);
  }
  public GetProductById(id:number):Observable<ProductInfo>{
       return this.http.get<ProductInfo>(`https://fakestoreapi.com/products/${id}`)
  }
  public GetCategories():Observable<string[]>{
    return this.http.get<string[]>(`https://fakestoreapi.com/products/categories`);
  }
}
