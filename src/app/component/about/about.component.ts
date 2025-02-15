import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, debounce, debounceTime, Observable, Subject, Subscriber} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DatePipe, UpperCasePipe} from '@angular/common';
import {SubstringPipe} from '../../pipes/SubstringPipe';

@Component({
  selector: 'app-about',
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    SubstringPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  text = 'hello';
  date = new Date();
  student = 'Artha';

  searchText = new FormControl();

  ngOnInit(): void {


    // this.searchText.valueChanges.subscribe(value=>{
    //   console.log(`will make the request [${value}]`);
    // })

    /** * debounceTime */
    // this.searchText.valueChanges.pipe(
    //   debounceTime(500)
    // ).subscribe(value => {
    //   console.log(`will make the request [${value}]`);
    // })

    /** * subject
    Output:
     Subscriber 1: [Hello1]
     Subscriber 1: [Hello2]
     Subscriber 1: [Hello3]
     Subscriber 2: [Hello3]

    */
    /*
    const subject = new Subject<String>();
    subject.subscribe(value => {
      console.log(`Subscriber 1: [${value}]`);
    })
    subject.next('Hello1');
    subject.next('Hello2');

    subject.subscribe(value => {
      console.log(`Subscriber 2: [${value}]`);
    })
    subject.next('Hello3');

     */

    /** * BehaviorSubject

     Output:
     Subscriber 1: [Initial Value]
     Subscriber 1: [Hello1]
     Subscriber 1: [Hello2]
     Subscriber 2: [Hello2]
     Subscriber 1: [Hello3]
     Subscriber 2: [Hello3]
     */
    const bSubject = new BehaviorSubject<string>('Initial Value');
    bSubject.subscribe(value => {
      console.log(`Subscriber 1: [${value}]`);
    })
    bSubject.next('Hello1');
    bSubject.next('Hello2');
    bSubject.subscribe(value => {
      console.log(`Subscriber 2: [${value}]`);
    })
    bSubject.next('Hello3');


  }

}
