import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TracksComponent} from "./components/tracks/tracks.component";
import {TrackItemComponent} from "./components/tracks/track-item/track-item.component";

const routes: Routes = [
  { path: 'tracks', component: TracksComponent },
  { path: 'track/item', component: TrackItemComponent },
  { path: 'track/item/:id', component: TrackItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [TracksComponent]
})
export class AppRoutingModule { }
