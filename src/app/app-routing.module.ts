import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404PagesComponent} from "./shared/pages/error404-pages/error404-pages.component";
import {canActivateGuard, canMatchGuard} from "./guards/auth.guard";
import {PublicGuard} from "./guards/public.guard";



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [PublicGuard],
    canMatch: [PublicGuard]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canActivate: [canActivateGuard],
    canMatch: [canMatchGuard]
  },
  {
    path: '404',
    component: Error404PagesComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
