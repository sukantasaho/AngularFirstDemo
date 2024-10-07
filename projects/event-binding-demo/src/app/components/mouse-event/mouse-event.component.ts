import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent {
public imageUrl = "assets/blackshoe.jpg";
public blueshoe = "assets/blueshoe.jpg";
public blackshoe = "assets/whiteshoe.jpg";
public whiteshoe = "assets/blackshoe.jpg";
public image = "";
public SetColor(colorName:string):void{
     switch(colorName){
        case 'black':
          this.imageUrl = "assets/blackshoe.jpg";
          break;
        case 'blue':
            this.imageUrl = "assets/blueshoe.jpg";
            break;
        case 'white':
              this.imageUrl = "assets/whiteshoe.jpg";
              break;
     }
}
public DisplayImage(colorName:string){
      
  switch(colorName){
    case 'black':
      this.image = "assets/blackshoe.jpg";
      break;
    case 'blue':
        this.image = "assets/blueshoe.jpg";
        break;
    case 'white':
          this.image = "assets/whiteshoe.jpg";
          break;

 }
}
}
