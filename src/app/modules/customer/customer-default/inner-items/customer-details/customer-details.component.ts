import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodosService} from '../../../../../services/todos.service';
import {NgIf} from '@angular/common';
import {CustomerListComponent} from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-details',
  imports: [
    NgIf,
    CustomerListComponent
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit {

  customerId = undefined;
  selectedCustomer:any ;

  constructor(private _activatedRoute: ActivatedRoute, private _todoService: TodosService) { }

  ngOnInit(): void {
    this.customerId = this._activatedRoute.snapshot.params['id'];

    this.loadCustomerDetails();
  }

  loadCustomerDetails() {
    this._todoService.getCustomerData(this.customerId).subscribe(response => {
      this.selectedCustomer = response;
      }
    )
  }

}
