import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-nested-form',
  templateUrl: './reactive-nested-form.component.html',
  styleUrls: ['./reactive-nested-form.component.css']
})
export class ReactiveNestedFormComponent {

  public frmRegister = new FormGroup({
    name:new FormControl(""),
    price:new FormControl(0),
    frmVendor:new FormGroup({
       venderName:new FormControl(""),
       venderRating:new FormControl(0)
    }),
  });
  get VenderName(){
    return this.frmRegister.get("venderName");
  }
  get VenderRating(){
    return this.frmRegister.get("venderRating");
  }
  Register(data:any){
      alert(JSON.stringify(data));
  }
}
