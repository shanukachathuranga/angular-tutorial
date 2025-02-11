import {Component, OnInit} from '@angular/core';
import {debounce, debounceTime, Observable, Subscriber} from 'rxjs';
import {log} from 'node:util';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {



  searchText = new FormControl();

  ngOnInit(): void {

    // this.searchText.valueChanges.subscribe(value=>{
    //   console.log(`will make the request [${value}]`);
    // })

    this.searchText.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      console.log(`will make the request [${value}]`);
    })


  }

}
