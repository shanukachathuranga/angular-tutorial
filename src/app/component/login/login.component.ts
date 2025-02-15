import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TokenManagerService} from '../../services/token-manager.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  tokenManagerService = inject(TokenManagerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  newToken:any = '';
  setToken(){
    this.tokenManagerService.setToken('access_token', this.newToken);
    console.log(this.activatedRoute.url);
    this.router.navigateByUrl('/dashboard');
  }

}
