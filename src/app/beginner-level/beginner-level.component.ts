import { Component, OnInit } from '@angular/core';
import { beginnerCards } from '../cards';

@Component({
  selector: 'app-beginner-level',
  templateUrl: './beginner-level.component.html',
  styleUrls: ['./beginner-level.component.css']
})
export class BeginnerLevelComponent implements OnInit {

  Cards = beginnerCards

  constructor() { }

  ngOnInit(): void {
  }

  toggle(card: HTMLImageElement, front: HTMLImageElement, url: string){
    card.classList.toggle('show');
    front.classList.toggle('hide')
  }
}
