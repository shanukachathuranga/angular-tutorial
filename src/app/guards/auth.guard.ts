import {CanActivateFn, Router} from '@angular/router';
import {inject, Inject} from '@angular/core';
import {TokenManagerService} from '../services/token-manager.service';



export const authGuard: CanActivateFn = (route, state) => {
  const tokenManagerService = inject(TokenManagerService);
  const router = inject(Router);
  if(tokenManagerService.isExist('access_token')) {
    return true;
  }else{
    router.navigateByUrl('/login');
    alert('You are not authorized to access this page');
    return false;
  }

};
