import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewheroPagesComponent } from './pages/newhero-pages/newhero-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import {MaterialModule} from "../material/material.module";
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeroesPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewheroPagesComponent,
    SearchPagesComponent,
    CardComponent,
    //pipes
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
