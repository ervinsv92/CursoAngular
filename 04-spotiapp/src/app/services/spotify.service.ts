import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify Service Listo!!!")
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDSS9-8-Jt1dUHrktvBnmtmy7ov3NqqGjNzpQd56kNMRQzE2_fOF-XjFkDdTOXuXnmEZO5-lqAKzbceUdI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDSS9-8-Jt1dUHrktvBnmtmy7ov3NqqGjNzpQd56kNMRQzE2_fOF-XjFkDdTOXuXnmEZO5-lqAKzbceUdI'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
