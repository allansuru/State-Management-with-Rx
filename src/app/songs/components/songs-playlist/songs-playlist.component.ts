import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <songs-list
        [list]="playlist$ | async"
        (toggle)="onToggle($event)">
        Playlist
      </songs-list>
    </div>
  `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {

  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    debugger
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}