import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { CopyrightDirective } from './copyright.directive';
import { HeroesModule } from './heroes/heroes.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [AppComponent, HeroComponent, CopyrightDirective],
  imports: [
    BrowserModule,
    HeroesModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
