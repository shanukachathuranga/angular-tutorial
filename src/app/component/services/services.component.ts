import { Component } from '@angular/core';
import {SearchBarTemplateComponent} from '../search-bar-template/search-bar-template.component';

@Component({
  selector: 'app-services',
  imports: [
    SearchBarTemplateComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  searchText: string='';
  setSearchText(value:any){
    this.searchText = value;
  }
}
