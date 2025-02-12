import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../../../../services/todos.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  todos:any[] = [];

  constructor(private _todosService: TodosService) {
  }

  ngOnInit() {
    this.loadAllData();
  }

  private loadAllData() {
    this._todosService.getAllTodos().subscribe({
      next: (data) => this.todos = data,
      error: (error) => console.error('There was an error!', error),
      complete: () => console.log('Completed!')
      }
    )
  }
}
