import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  standalone: true,  
  imports: [FormsModule, CommonModule] 
  
})
export class SongsComponent implements OnInit {
  albums: any[] = [];
  selectedAlbum: any;

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.songService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  onAlbumChange(albumId: string) {
    this.songService.getSongsByAlbum(albumId).subscribe(album => {
      this.selectedAlbum = album;
    });
  }
}

