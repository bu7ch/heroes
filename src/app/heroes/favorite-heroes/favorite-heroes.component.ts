import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.css']
})
export class FavoriteHeroesComponent implements OnInit {
heroes
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
