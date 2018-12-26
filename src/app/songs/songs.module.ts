import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { SongsService } from './services/songs.service';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsFavouritesComponent } from './components/songs-favourites/songs.favourites.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        SongsService
    ],
    declarations: [
        SongsFavouritesComponent,
        SongsListenedComponent,
        SongsPlaylistComponent
    ],
    exports: [
        SongsFavouritesComponent,
        SongsListenedComponent,
        SongsPlaylistComponent
    ]

})

export class SongsModule {

}
