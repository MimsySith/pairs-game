# Pairs Game

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

It is a basic card game of a type called a "pairs game", which tests memory by making you remember where cards are located on a grid. Each card appears twice, as a "pair", and you have to match them. Full instructions are on the deployed Single Page Application.

All external resources used on this page (sounds, pictures) are fully open source and on a license which allows use in any non-commercial or commercial situation, so no copyright has been breached. The sources and, where applicable, creators will be credited below.



## The Point

Memory games, such as pairs games, help keep the mind active and are proven to be beneficial as we age to slow cognitive decline and possibly even help prevent dementia. They're also rather fun.  So the point of this game is to have fun, and possibly help cognitive abilities at the same time. Much the same as other games such as crosswords, jigsaw puzzles etc. 

I do not anticipate there being a particular group or demographic who will use a game like this. It is a simple game suitable for all ages, skill levels, and personality types.



## Design planning

Like I usually do, I did all the planning for this app with a pen/coloured pencils and paper. I find it less frustrating and more intuitive than using an online service such as Balsmiq or Figma. First I wrote out what I intended the game to do, and possible steps that would need to be taken. Then I worked out a basic design. Then I wrote out possible functions that would be required, and other business logic.

As I suspect happens with many projects, the plan design changed organically as I went and as I realised what would and wouldn't work practically. I have kept the UI very simple and clean.

My decision to use Angular 13 for this project was due to "the devil you know". Although Angular in known to have a steep learning curve when compared to other frameworks, I had already made quite a bit of progress on a personal project using Angular, so decided to stick with it for this assignment.

Making this project a Single Page Application (SPA) was a no-brainer. It would have been very clunky and unweildy to write as a series of "normal" HTML web pages with JavaScript. I do like the compartmentalised layout of Angular for this purpose too, where each component has its own template, styling and logic in discreet files.



## Features

I have included a few features in this game, including:

- Optional sound effects which are turned off by default
- A scoring system based on golf (and why not?)
- Different difficulty levels




### Planned features

I would like to keep this application very simple, but there are a number of things I would change

1. Better sound effects. The open source sound effects I found are a bit tacky and annoying
2. More professional styling. This is something I really struggle with - I am not good at designing pretty things by nature
3. A single Angular Service for commonly resused logic. This is something you are supposed to do in Angular using Observables, but I was having difficulty with Observables so put all logic in Component .ts files. I have to work on this.
4. Keyboard navigation. I am not sure how to approach this in Angular, but I'm working on it
5. An option for a time limit to "play against the clock"



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

It is really, really difficult to use things like HTML and JavaScript validator services when everything is in different, interdependent modules (not to mention that fact that Angular extends HTML so syntax that is in fact correct can show up as wrong). I couldn't find an Angular specific validator.

I have myself played all levels in the game, and got some guinea pigs to do the same. They didn't want to stop playing so I could get back to work, which I take as a good sign. <br>
One thing that did come up is the cheating failsafe (which stops people from turning over more than two cards at once) works a little too well, which can be annoying.


## Problems encountered and solved (or not)

- **Array shuffling**:  I came up with a very clumsy method of shuffling the array of cards using Math.random(), but it was inefficient and inconsistent. I turned to the internet for help and found the Fisher-Yates algorithm for shuffling arrays. I used that. The other issue I had with array shuffling is that initially, I was going to use one card in the array for each pair and then double them. The logic of this quickly proved flawed - with the array shuffling, if you don't have all cards as different, then you end up with three of one card and none of another when you shuffle them. I then just created two of each card as seperate array items.

- **Comparing matching cards**:  This is related to the array shuffling problem. How do I get the program to recognise that two different objects in an array are actually the same? This was pretty easy to solve, however, as the underlying url source was always going to be the same for both. So instead of comparing the objects themselves, I compared the sources each card image was linked to.

- **Keeping matched cards face up**:  This also was a minor issue that didn't take long to solve. I just added a "matched" class to the matched cards that was at the bottom of the cascade in CSS, which assured it would override the toggled "show" and "hide" classes.

- **Turning back unmatched cards**:  Althought this seemed simple, it threw up associated problems. I used a setTimeout() function to delay the cards toggling back to hide when two had been turned over. But because it worked asynchronously (the next function would be processed before the timeout had finished) I ended up with the arrays returning empty, as the next function emptied the arrays ready for the next turn. Which meant when the cards turned over, they couldn't be matched because there were no entries in the "matched" arrays to match. So I tried using a promise, but the promise function overshadowed the array so it couldn't be accessed. I think I should have used an Observable, but I had such a headache trying to set it up I went for plan B, which was to put all relevent instructions sequentially within the timeout function itself.

- **Adding keyboard navigation**:  I still haven't figured this one out. Angular makes it difficult - a lot of the old methods are deprecated, and there are some problems with using jQuery in TypeScript files. It is possible, but I haven't figured it out yet.

- **Deployment to GitHub Pages**: Oh, what a headache. GitHub pages does not like Angular apps much, it seems. I got the main pages to work briefly, but the images weren't showing. When I tried to fix that, the whole page broke again. I think
it is an issue with GitHub not liking relative paths. Anyway, I have fiddled with the urls and changed the base href. Just
waiting to see if this works.
UPDATE: Yes it did.

-**Screen Freezing when using Sound Effects on Mobile Phone**: I think this is because Angular is quite a memory intensive framework, so when you add sound effects to everything else, it takes too long to process all the JavaScript and the screen
momentarily freezes. This is solveable, I believe, by making the code more efficient. Something to look into. It is not a problem on computers or tablets - I have tested on all device types.

## Credits

It's important to credit the creators of the SVG icons, so many thanks to 
- Lorc, http://lorcblog.blogspot.com
- Carl Olsen, https://twitter.com/unstoppableCarl
- Willdabeast, http://wjbstories.blogspot.com
- Viscious Speed, http://viscious-speed.deviantart.com - CC0
- Faithtoken, http://fungustoken.deviantart.com
- Andy Meneely, http://www.se.rit.edu/~andy/
- Kier Heyl
- Rihsuhl
- Catsu 

Thanks also to the people at Free Sounds Library for providing the sound effects.

Thanks to [Stack Overflow](https://stackoverflow.com/) for the basic information on how to create audio in Angular
