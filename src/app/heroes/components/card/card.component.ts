import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'heroes-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input()

  public heroe!:Hero;

  ngOnInit():void {
    if (!this.heroe) throw Error('Hero propeterty is required');
  }


}
