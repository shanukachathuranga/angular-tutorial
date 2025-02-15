import {Injectable} from '@angular/core';

/**
 * Service responsible for managing authentication tokens in localStorage
 * Handles token storage and verification in a browser-safe manner
 */
@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {
  constructor() { }

  /**
   * Stores a token in localStorage with the specified key
   * Only stores if running in a browser environment
   * @param key The key to store the token under
   * @param token The token value to store
   */
  public setToken(key:any, token:any){
      localStorage.setItem(key, token);

  }

  /**
   * Checks if a token exists in localStorage for the given key
   * @param key The key to check for
   * @returns boolean indicating if token exists
   */
  public isExist(key:any):boolean{
    let token = localStorage.getItem(key);
    if(token) {
      return true;
    }
    return false;
  }
}
