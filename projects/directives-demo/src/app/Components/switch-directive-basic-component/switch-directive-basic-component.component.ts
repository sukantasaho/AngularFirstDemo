import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive-basic-component',
  templateUrl: './switch-directive-basic-component.component.html',
  styleUrls: ['./switch-directive-basic-component.component.css']
})
export class SwitchDirectiveBasicComponentComponent {
     str:string="on";
     switch:boolean = false;
     imageON = 'assets/on.jpg';
     imageOFF = 'assets/off.jpg';
     backGroundColor = '';
     switchONOFF()
     {
        this.switch = (this.switch==false?true:false);
        if(this.switch==true)
         this.backGroundColor = 'background-color:green';
        else
        this.backGroundColor = 'background-color:red';
     }
}
