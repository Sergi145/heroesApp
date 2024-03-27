import { Component } from '@angular/core';

@Component({
  selector: 'app-newhero-pages',
  templateUrl: './newhero-pages.component.html',
  styleUrl: './newhero-pages.component.css'
})
export class NewheroPagesComponent {
    public publishers = [
      {
        id: 'DC Comics',
        desc: 'DC - Comics'
      },
      {
        id: 'Marvel Comics',
        desc: 'Marvel - Comics'
      }
    ]
}
