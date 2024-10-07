import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  constructor(private fb : FormBuilder){

  }
  public frmRegister = this.fb.group({
     name:this.fb.control("",[Validators.required,Validators.minLength(5)]),
     price:this.fb.control(0),
     frmVendor : this.fb.group({
      venderName:this.fb.control(""),
      venderRating:this.fb.control(0)
     }),
     frmVenderContactDetails:this.fb.group({
      website:this.fb.control(""),
      address:this.fb.control(""),
      phone:this.fb.control("")
     })
  });
  Register(data:any){
    alert(JSON.stringify(data));
  }
  get Name():FormControl{
    return this.frmRegister.get("name") as FormControl;
  }
  get Price():FormControl{
    return this.frmRegister.get("price") as FormControl;
  }
  get Vender():FormGroup{
    return this.frmRegister.get("frmVendor") as FormGroup;
  }
 
}
