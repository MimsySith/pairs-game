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
  cardArray = new Array;
  cardFlipArray = new Array;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(card: HTMLImageElement, front: HTMLImageElement, url: string){
    this.Count++;
    card.classList.toggle('show');
    front.classList.toggle('hide');
    this.cardArray.push(url);
    this.cardFlipArray.push(card, front);
    if(this.Count===2 && this.cardArray[0] === this.cardArray[1]){
      if(this.cardFlipArray[0] === this.cardFlipArray[2]){
        console.log('that is the same card')
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
      }

      
      }

      if(this.Count>2){
        document.getElementById('cheat')!.innerHTML="HEY! Only two cards at a time" + "<br>" + "Don't cheat."
        this.cardFlipArray[0]?.classList.remove('show');
        this.cardFlipArray[1]?.classList.remove('hide');
        this.cardFlipArray[2]?.classList.remove('show');
        this.cardFlipArray[3]?.classList.remove('hide');
        this.cardFlipArray[4]?.classList.remove('show');
        this.cardFlipArray[5]?.classList.remove('hide');
        this.cardFlipArray[6]?.classList.remove('show');
        this.cardFlipArray[7]?.classList.remove('hide');
      }
    

    if(this.Count === 2){

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
        document.getElementById('cheat')!.innerHTML=''
      }, 1000); 

     

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


