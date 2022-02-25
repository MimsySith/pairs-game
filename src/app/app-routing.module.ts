import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginnerLevelComponent } from './beginner-level/beginner-level.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { ExpertLevelComponent } from './expert-level/expert-level.component';
import { IntermediateLevelComponent } from './intermediate-level/intermediate-level.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: EntryPageComponent},
  {path: 'beginner', component: BeginnerLevelComponent},
  {path: 'intermediate', component: IntermediateLevelComponent},
  {path: 'expert', component: ExpertLevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
