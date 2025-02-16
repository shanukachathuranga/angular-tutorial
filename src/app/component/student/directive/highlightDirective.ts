import {Directive, ElementRef, HostListener, Input} from '@angular/core';

//attribute directive
@Directive({
  selector: '[appHighlight]',
  standalone: true
})

export class HighlightDirective{
  @Input() highlightColor: string = 'blue';

  constructor(private _el: ElementRef){  }

  @HostListener('mouseenter') onMouseEnter(){
    this._el.nativeElement.style.color = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._el.nativeElement.style.color = 'red';
  }

}


