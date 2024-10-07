import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomD]'
})
export class CustomDDirective {

  constructor(el:ElementRef) { 
    //console.log(el);
    el.nativeElement.style.border="2px solid red"
  }

}
