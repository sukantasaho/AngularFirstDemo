import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  templateUrl: './ng-style-demo.component.html',
  styleUrls: ['./ng-style-demo.component.css']
})
export class NgStyleDemoComponent {
    public bgStyle:string = "red";
    public textStyle:string="white";
    public padding:string="0";
    public fontSize:string = "0";
   
    public StyleObj:{
      "background-color":string,
      "color":string,
      "padding":string;
      "font-size":string
    }={
      "background-color":"red",
      "color":"white",
      "padding":this.padding+"px",
      "font-size":this.fontSize+"px"
    }
    ApplyStyle(){
          this.StyleObj={
           "background-color":this.bgStyle,
           "color":this.textStyle,
           "padding":this.padding+"px",
           "font-size":this.fontSize+"px" 
          }
    }
    ChangeFont(){
      this.StyleObj={
        "background-color":this.bgStyle,
        "color":this.textStyle,
        "padding":this.padding+"px",
        "font-size":this.fontSize+"px" 
       }
    }
}
