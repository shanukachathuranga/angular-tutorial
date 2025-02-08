import { Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContactComponent} from './component/contact/contact.component';
import {AboutComponent} from './component/about/about.component';
import {ServicesComponent} from './component/services/services.component';
import {NotFoundComponent} from './component/not-found/not-found.component';


export const routes: Routes = [

  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'service', component: ServicesComponent},
  {path:'**', component:NotFoundComponent}
];
