import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@HostListener('document:keyup', ['$event'])
export class AppComponent {
  title = 'Pairs Game';

 

  constructor(){}
}


