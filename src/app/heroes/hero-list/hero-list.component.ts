import { Component, OnInit } from '@angular/core';
import { Observable, Subject  } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Hero } from 'src/app/components/hero/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
heroes$: Observable<Hero[]>;
private heroSub = new Subject();
  constructor(private heroService: HeroService) {
    
   }

  ngOnInit(): void {
    this.getHeroes()
  }
//  add(name:string){
//    this.heroService.createHero(name).subscribe(hero => this.heroes.push(hero));
//  }
//  rename(hero:Hero) {
//    const existingHero = {id:hero.id, name:'Venom'};
//    this.heroService.editHero(hero.id, existingHero).subscribe(()=> {
//      this.heroes.find(hero => hero.id).name = 'Venom';
//    })
//  }
//  remove(hero: Hero){
//    this.heroService.deletehero(hero.id).subscribe(()=> {
//     this.heroes$ = this.heroes.filter(selected=> selected !== hero)
//    })
//  }

 private getHeroes() {
    this.heroes$ = this.heroService.getHeroes()
  //   .pipe(
  //    map(heroes => this.heroes = heroes),
  //    takeUntil(this.heroSub)
  //  ).subscribe()
 }

 ngOnDestroy() {
   this.heroSub.next();
   this.heroSub.complete()
 }

}
