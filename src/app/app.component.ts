import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'heroes';
  hero= 'Superman'


  onLike() {
    alert(`I like ${this.hero}`)
    this.hero = "Batman";
  }
}


