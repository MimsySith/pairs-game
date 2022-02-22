import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeginnerLevelComponent } from './beginner-level/beginner-level.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { IntermediateLevelComponent } from './intermediate-level/intermediate-level.component';
import { ExpertLevelComponent } from './expert-level/expert-level.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginnerLevelComponent,
    EntryPageComponent,
    IntermediateLevelComponent,
    ExpertLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
