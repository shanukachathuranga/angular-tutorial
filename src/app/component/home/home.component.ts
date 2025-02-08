import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {CustomerTemplateComponent} from '../customer-template/customer-template.component';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    CustomerTemplateComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customers: any[] = [
    {
      id:'C001',
      name: 'John Doe',
      salary: 10000,
      avatar:'https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg'
    },
    {
      id:'C002',
      name: 'Jane Doe',
      salary: 20000,
      avatar:'https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-7-4.jpg'
    },
    {
      id:'C003',
      name: 'Jim Doe',
      salary: 30000,
      avatar:'https://servicemarvel.com/wp-content/uploads/2023/04/Industry-Expert.png'
    },
    {
      id:'C004',
      name: 'Jack Doe',
      salary: 40000,
      avatar:'https://assyrianartsinstitute.org/wp-content/uploads/2014/08/shutterstock_121519246.jpg'
    },
    {
      id:'C005',
      name: 'Jill Doe',
      salary: 50000,
      avatar:'https://demo1.clinicalmediahub.com/wp-content/uploads/2019/03/PHYSICIANS-women3.jpg'
    }


  ]


}
