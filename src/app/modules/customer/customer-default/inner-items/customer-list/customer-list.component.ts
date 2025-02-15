import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../../../../services/todos.service';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [
    NgForOf
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  todos:any[] = [];

  constructor(private _todosService: TodosService, private _router: Router) {
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

  loadPage(id:any){
    // this._router.navigateByUrl('/customer/default-customer/details/'+id);
    this._router.navigate(['/customer/default-customer/details/'+id]);
  }

}
