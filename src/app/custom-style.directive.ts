import { Directive ,ElementRef} from '@angular/core';
import { Color } from './color';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor=Color.Red;
    el.nativeElement.style.border="solid black 3px";
  }

}
