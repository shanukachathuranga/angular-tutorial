import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';
import {PhotosDto} from '../dto/PhotosDto';
import {Photo} from '../dto/Photo';

@Injectable({
  providedIn: 'root' // This service is provided at the root level, making it a singleton
})
export class PhotosService {

  private baseUrl: string = environment.url; // Base URL for the API, taken from environment configuration

  constructor(private _http: HttpClient) { } // Injecting HttpClient for making HTTP requests

  // Method to fetch all photos from the API
  findAllPhotos(): Observable<PhotosDto[]> {
    return this._http.get<Photo[]>(this.baseUrl + '/photos').pipe(
      map((data: Photo[]) => {
        // Transforming the array of Photo objects into an array of PhotosDto objects
        return data.map((photo: Photo) => {
          return new PhotosDto(photo.albumId, photo.id, photo.title, photo.url, photo.thumbnailUrl);
        });
      })
    );
  }

  // Method to fetch all comments from the API
  findAllComments(): Observable<any> {
    return this._http.get(this.baseUrl + '/comments');
  }
}
