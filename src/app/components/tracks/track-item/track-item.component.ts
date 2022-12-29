import { Component, OnInit } from '@angular/core';
import {Track} from "../../../models/Track";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {TracksHttpService} from "../../../services/tracks-http.service";

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  track: Track = new Track();

  formGroup!: FormGroup;

  constructor(//track: Track,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private tracksHttpService: TracksHttpService)
  {
    //this.track = track;
    this.initFormGroup();

    const {id} = this.activatedRoute.snapshot.params;
    if (id) {
      this.track.id = id;
      this.getUser(id);
    }
  }

  getUser(id: number) {
    this.tracksHttpService.get(id)
      .subscribe({
          next: track => {
            this.track = track;
            this.formGroup.patchValue({
              name: track.name,
              genre: track.name
            });
          },
          error: error => {
            console.error(error)
          }
        })
  }
  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      genre: [null, Validators.required],
    })
  }

ngOnInit(): void {
  }

  save() {
    let track = {...this.track}
    track.id ? this.update(track) : this.create(track);
  }

  create(track: Track) {
  this.tracksHttpService.create(track)
    .subscribe({
      next: () => {
        this.router.navigate(['/tracks']);
      },
      error: error => {
        console.error(error)
      }
    })
  }

  update(track: Track) {
    this.tracksHttpService.update(track)
      .subscribe({
        next: () => {
          this.router.navigate(['/tracks']);
        },
        error: error => {
          console.error(error)
        }
      })
  }
}
