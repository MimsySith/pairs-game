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
  CheatCount = 0;
  newArray = this.shuffle([...this.Cards])
  cardArray = new Array;
  cardFlipArray = new Array;
  score = -12;
  pairs = 12;
  soundOn = document.getElementById('sound');

  constructor() { }

  ngOnInit(): void {
  }

 

  toggle(card: HTMLImageElement, front: HTMLImageElement, url: string, sound: HTMLInputElement){
    if(sound.checked){
      let turn = new Audio();
      turn.src='assets/sounds/BeltHit.mp3';
      turn.load();
      turn.play();
    }
    this.Count++;
    
    
    card.classList.toggle('show');
    front.classList.toggle('hide');
    this.cardArray.push(url);
    this.cardFlipArray.push(card, front);
    if(this.Count===2 && this.cardArray[0] === this.cardArray[1]){
      if(this.cardFlipArray[0] === this.cardFlipArray[2]){
        console.log('that is the same card')
        this.Count = 0;
        this.cardArray.length = 0;
        this.cardFlipArray.length=0;
      } else {
        document.getElementById('hooray')!.innerHTML+='Yay! Those cards match!' + '<br>'
        this.cardFlipArray[0]?.classList.add('matched');
        this.cardFlipArray[2]?.classList.add('matched');
        this.cardFlipArray[1]?.classList.add('matched-front');
        this.cardFlipArray[3]?.classList.add('matched-front');
        this.cardFlipArray[4]?.classList.remove('show');
        this.cardFlipArray[5]?.classList.remove('hide');
        this.cardFlipArray[6]?.classList.remove('show');
        this.cardFlipArray[7]?.classList.remove('hide');
        this.pairs--;
      }

      
      }

      if(this.Count>2){
        this.CheatCount++;
        document.getElementById('cheat')!.innerHTML="Amount of cheating attempts:  " + this.CheatCount;
        this.cardFlipArray[0]?.classList.remove('show');
        this.cardFlipArray[1]?.classList.remove('hide');
        this.cardFlipArray[2]?.classList.remove('show');
        this.cardFlipArray[3]?.classList.remove('hide');
        this.cardFlipArray[4]?.classList.remove('show');
        this.cardFlipArray[5]?.classList.remove('hide');
        window.alert('HEY! Only two cards at a time. No cheating!')
      }
      

    if(this.Count === 2){
      this.score++;
      setTimeout(() => {
        this.cardFlipArray[0]?.classList.remove('show');
        this.cardFlipArray[1]?.classList.remove('hide');
        this.cardFlipArray[2]?.classList.remove('show');
        this.cardFlipArray[3]?.classList.remove('hide');
        this.cardFlipArray[4]?.classList.remove('show');
        this.cardFlipArray[5]?.classList.remove('hide');
        this.cardFlipArray[6]?.classList.remove('show');
        this.cardFlipArray[7]?.classList.remove('hide');
        console.log(this.cardFlipArray);
        this.Count = 0;
        this.cardArray.length = 0;
        this.cardFlipArray.length=0;
        }, 800);  
  }

  

  if(this.pairs === 0){
    if(sound.checked){
    let cheer = new Audio();
    cheer.src='assets/sounds/CrowdCheer.mp3';
    cheer.load();
    cheer.play();
    }
    window.alert('Hooray! You\'ve won! Refresh the browser to restart the game.')
    document.getElementById('score')!.innerHTML='Your final score is:  ' + (this.score + this.CheatCount) + '<br>' +
    '(A perfect score would be 0) '
  }
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


