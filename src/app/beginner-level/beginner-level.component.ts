import { Component, OnInit } from '@angular/core';
import { beginnerCards } from '../cards';

@Component({
  selector: 'app-beginner-level',
  templateUrl: './beginner-level.component.html',
  styleUrls: ['./beginner-level.component.css']
})
export class BeginnerLevelComponent implements OnInit {

  Cards = beginnerCards;
  Count = 0;
  newArray = this.shuffle([...this.Cards])

  constructor() { }

  ngOnInit(): void {
  }

  toggle(card: HTMLImageElement, front: HTMLImageElement, url: string){
    this.Count++;
    card.classList.toggle('show');
    front.classList.toggle('hide');

  }

    //I just couldn't figure out the way to shuffle the cards when I wanted to start a new game.
    //The following is taken (with slight modifications) from www.webtips.dev/memory-game-in-javascript
    //it is the Fisher-Yates Shuffle for ECMAScript 2015
    shuffle(array: any){
      const newArray = [...array];
      for(let i=newArray.length-1; i>0; i--){
          const randomIndex = Math.floor(Math.random()*(i+1));
          const origin = newArray[i];

          newArray[i] = newArray[randomIndex];
          newArray[randomIndex] = origin;
      };

      return newArray;

  };
}


