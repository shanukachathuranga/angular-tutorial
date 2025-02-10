import { Component } from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import {response} from 'express';
import {NgForOf} from '@angular/common';
import {PhotosDto} from '../../dto/PhotosDto';

@Component({
  selector: 'app-contact',
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  photos:any[] = [];
  constructor(private _service:PhotosService) {

  }

  load():void{
    //code to get all the data
    //but to do this, you will have to import the service here
    this.loadAllPhotos();
    this.loadAllComments();
  }

  loadAllPhotos():void{
    this._service.findAllPhotos().subscribe({
      next:(data:PhotosDto[]) => this.photos = data,
      error: (error) => console.log(error),
      complete:() => console.log('completed')
    }
      // response=>{
      //   this.photos = response;
      //   console.log(response);
      // }
    );

  }

  loadAllComments():void{
    this._service.findAllComments().subscribe(
      response=>{
        console.log(response);
      }
    )

  }
}
