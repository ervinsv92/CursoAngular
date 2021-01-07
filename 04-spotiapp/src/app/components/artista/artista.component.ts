import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any[] = [];
  loadingArtist:boolean;

  constructor(private spotify:SpotifyService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTacks(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTacks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(topTracks)
    });
  }
}
