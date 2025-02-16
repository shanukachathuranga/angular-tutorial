import {Component} from '@angular/core';
import {HighlightDirective} from './directive/highlightDirective';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

// component directive
@Component({
  selector: 'app-student',
  template: `<h1 appHighlight="appHighlight">Hi My Name is: {{ myName }}</h1>
  <div [ngSwitch]="color">
    <p *ngSwitchCase="'red'">Red Color</p>
    <p *ngSwitchCase="'black'">black Color</p>
    <p *ngSwitchCase="'blue'">blue Color</p>
    <p *ngSwitchDefault>Wrong</p>
  </div>
  `,
  styles: [`h1 {
    color: red
  }`],
  imports: [
    HighlightDirective,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  standalone: true
})

export class StudentComponent{
  myName: string = 'shanuka chathuranga';
  color= 'orange';
}
