import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styleUrl: './layout-pages.component.css'
})
export class LayoutPagesComponent {
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
}
