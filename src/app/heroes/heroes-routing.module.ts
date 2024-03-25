import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPagesComponent} from "./pages/layout-pages/layout-pages.component";
import {NewheroPagesComponent} from "./pages/newhero-pages/newhero-pages.component";
import {SearchPagesComponent} from "./pages/search-pages/search-pages.component";
import {ListPagesComponent} from "./pages/list-pages/list-pages.component";
import {HeroesPagesComponent} from "./pages/heroes-pages/heroes-pages.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      {
        path: 'new-hero',
        component: NewheroPagesComponent
      },
      {
        path: 'search',
        component: SearchPagesComponent
      },
      {
        path: 'edit/:id',
        component: NewheroPagesComponent
      },
      {
        path: 'list',
        component: ListPagesComponent
      },
      {
        path: ':id',
        component: HeroesPagesComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
