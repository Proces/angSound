import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/layout/header/header.component";
import {TracksComponent} from "./components/tracks/tracks.component";
import {TrackItemComponent} from "./components/tracks/track-item/track-item.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TracksHttpService} from "./services/tracks-http.service";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    declarations: [
        AppComponent,
        TracksComponent,
        TrackItemComponent,
        HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [TracksHttpService,
  FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
