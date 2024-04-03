import { Component } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {User} from "../../../auth/interfaces/user.interface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styleUrl: './layout-pages.component.css'
})
export class LayoutPagesComponent {
  constructor(private authService: AuthService, private route: Router) {
  }

  public sidebarItems = [
      {
        label: 'listado',
        icon: 'label',
        url: './list'
      },
      {
        label: 'Añadir',
        icon: 'add',
        url: './new-hero'
      },
      {
        label: 'Buscar',
        icon: 'search',
        url: './search'
      }

    ]

  get user():User | undefined{
    return this.authService.CurrentUser;
  }

  onLogout(){
    this.authService.logout();
    this.route.navigate(['/auth/login'])
  }
}
