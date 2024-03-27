import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, delay} from "rxjs";
import {Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'app-heroes-pages',
  templateUrl: './heroes-pages.component.html',
  styleUrl: './heroes-pages.component.css'
})
export class HeroesPagesComponent implements OnInit {

  public hero?: Hero;

  goback():void {
    this.router.navigateByUrl('heroes/list')
  }

  constructor(private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute,
                private router: Router
    ) {}

  ngOnInit():void {
    this.activatedRoute.params.pipe(
      delay(300),
      switchMap(({id})=> this.heroesService.getHeroesById(id)),
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes/list'])

      this.hero = hero;
      console.log(hero);
      return;
    })
  }
}
