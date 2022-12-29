import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { finalize, first } from "rxjs";
import {Track} from "../../models/Track";
import {TracksHttpService} from "../../services/tracks-http.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})

export class TracksComponent implements OnInit, AfterViewInit {

  public tracksList: Track[] = [];

  constructor(private tracksHttpService: TracksHttpService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  getAll() {
    this.tracksHttpService.getAll()
      .pipe(first())
      .subscribe({
        next: tracks => {
          this.tracksList = tracks;
        },
        error: error => {
          console.error(error.message)
        }
      })
  }

  delete(id: number) {
    this.tracksHttpService.delete(id)
      .subscribe({
          next: () => {
            this.delete(id);
            this.getAll();
          },
          error: error => {
            console.log(error)
          }
        }
      )
  }

}
