# Pairs Game

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

It is a basic card game of a type called a "pairs game", which tests memory by making you remember where cards are located on a grid. Each card appears twice, as a "pair", and you have to match them. Full instructions are on the deployed Single Page Application.

All external resources used on this page (sounds, pictures) are fully open source and on a license which allows use in any non-commercial or commercial situation, so no copyright has been breached. The sources and, where applicable, creators will be credited below.



## The Point

Memory games, such as pairs games, help keep the mind active and are proven to be beneficial as we age to slow cognitive decline and possibly even help prevent dementia. They're also rather fun.  So the point of this game is to have fun, and possibly help cognitive abilities at the same time. Much the same as other games such as crosswords, jigsaw puzzles etc. 

I do not anticipate there being a particular group or demographic who will use a game like this. It is a simple game suitable for all ages, skill levels, and personality types.



## Design planning

Like I usually do, I did all the planning for this app with a pen/coloured pencils and paper. I find it less frustrating and more intuitive than using an online service such as Balsmiq or Figma. First I wrote out what I intended the game to do, and possible steps that would need to be taken. Then I worked out a basic design. Then I wrote out possible functions that would be required, and other business logic.

As I suspect happens with many projects, the plan design changed organically as I went and as I realised what would and wouldn't work practically.

My decision to use Angular 13 for this project was due to "the devil you know". Although Angular in known to have a steep learning curve when compared to other frameworks, I had already made quite a bit of progress on a personal project using Angular, so decided to stick with it for this assignment.

Making this project a Single Page Application (SPA) was a no-brainer. It would have been very clunky and unweildy to write as a series of "normal" HTML web pages with JavaScript. I do like the compartmentalised layout of Angular for this purpose too, where each component has its own template, styling and logic in discreet files.



## Features

I have included a number of features in this game, including:

- Optional sound effects which are turned off by default
- A scoring system based on golf (and why not?)
- Keyboard navigation
- Different difficulty levels
- An option for a time limit to "play against the clock"



### Planned features

I would like to keep this application very simple, but there are a number of things I would change

1. Better sound effects. The open source sound effects I found are a bit tacky and annoying
2. More professional styling. This is something I really struggle with - I am not good at designing pretty things by nature
3. A single Angular Service for commonly resused logic. This is something you are supposed to do in Angular using Observables, but I was having difficulty with Observables so put all logic in Component .ts files. I have to work on this.



## Technology used

- [Angular 13](https://angular.io/), which includes
    - HTML
    - CSS
    - [Typescript](https://www.typescriptlang.org/)
    - [Javascript](https://www.javascript.com/)
    - JSON
    - [Karma](https://www.npmjs.com/package/karma)
- Paint 3D (for card backs)
- SVG icons from [game-icons.net](https://game-icons.net/) for my cards
- MP3 Sound effects from [freesoundslibrary.com](https://www.freesoundslibrary.com/)
- [Git](https://github.com/), for source control
- Markdown, for this Read Me file



## Testing

I relied heavily on console.log() and Chrome's Developer Tools to get me out of sticky situations where I wasn't sure why things weren't working. 

It is really, really difficult to use things like HTML and JavaScript validator services when everything is in different, interdependent modules (not to mention that fact that Angular extends HTML so syntax that is in fact correct can show up as wrong).



