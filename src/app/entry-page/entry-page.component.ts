import { Component, OnInit } from '@angular/core';
import { Cards } from '../cards';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

  constructor() { }

  Cards = Cards;

  ngOnInit(): void {
  }

}
