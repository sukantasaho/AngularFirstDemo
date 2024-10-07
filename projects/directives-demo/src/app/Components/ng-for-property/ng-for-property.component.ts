import { Component } from '@angular/core';
import { Products } from '../../fakestore-api-interface';

@Component({
  selector: 'app-ng-for-property',
  templateUrl: './ng-for-property.component.html',
  styleUrls: ['./ng-for-property.component.css']
})
export class NgForPropertyComponent {

 public products:Products[] =[];
    ngOnInit(){
       fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
             .then(data=>{
              this.products = data;
             })
    }

 }

