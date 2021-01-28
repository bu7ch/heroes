import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FavoriteHeroesComponent } from './favorite-heroes/favorite-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HeroListComponent, FavoriteHeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }
