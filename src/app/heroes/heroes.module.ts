import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewheroPagesComponent } from './pages/newhero-pages/newhero-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    HeroesPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewheroPagesComponent,
    SearchPagesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
