import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/components/hero/hero.model';
import { HeroDetailService } from '../hero-detail.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
hero: Hero;
@Input() id:number;
  constructor(private heroDetailService: HeroDetailService) { }

  ngOnInit(): void {
    // this.hero = this.heroDetailService.getHero(this.id)
  }
 

}
