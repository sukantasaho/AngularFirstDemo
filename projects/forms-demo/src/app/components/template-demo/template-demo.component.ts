import { Component } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent {
  
  public RegisterForm(data:any){
         alert(JSON.stringify(data));
  }
}
