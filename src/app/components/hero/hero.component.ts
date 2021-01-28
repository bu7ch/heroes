import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() name: string;
  @Output() liked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    console.log(`Hero changed from ${oldValue} to ${newValue}`);
    
  }
  
}


