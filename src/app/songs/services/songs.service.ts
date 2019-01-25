import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '../../store';

import { map, tap } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

export interface Song {
  id: number,
  name: string,
  listened: boolean,
  favourite: boolean
}

@Injectable()
export class SongsService {

  getPlaylist$ = this.http
    .get('http://localhost:3000/playlist')
    .pipe(
        tap(next => {
            console.log('NEXT: ', next);
            this.store.set('playlist', next);
        })
        );


  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  toggle(event: any) {
    this.http
      .put(`http://localhost:3000/playlist/${event.track.id}`, event.track)
      .pipe(
        map(res => res)
      )
      .subscribe((track: Song) => {
        const value = this.store.value.playlist;

        const playlist = value.map((song: Song) => {
          if (event.track.id === song.id) {
            return { ...song, ...event.track };
          } else {
            return song;
          }
        });
        this.store.set('playlist', playlist);
      });
  }

}
