import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  {path : "about", component : AboutComponent},
  {path : "schedule", component : ScheduleComponent},
  {path : "map", component : MapComponent},
  {path : "speakers", component : SpeakersComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
