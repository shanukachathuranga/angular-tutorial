import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';
import {PhotosDto} from '../dto/PhotosDto';
import {Photo} from '../dto/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private baseUrl:string = environment.url;

  constructor(private _http: HttpClient) { }

  findAllPhotos():Observable<PhotosDto[]>{
    return this._http.get<Photo[]>(this.baseUrl+'/photos').pipe(
      map((data:Photo[])=>{
        return data.map((photo:Photo)=>{
          return new PhotosDto(photo.albumId, photo.id, photo.title, photo.url, photo.thumbnailUrl);
        });
      })
    );
  }

  findAllComments():Observable<any>{
    return this._http.get(this.baseUrl+'/comments');
  }



}
