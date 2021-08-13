import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  // paises:any[]=[];
  // constructor(private http:HttpClient) {
  //   console.log('Constructor de Home hecho');
  //     this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((respuesta:any)=>{
  //       console.log(respuesta);
  //       this.paises=respuesta;
  //     });
  nuevasCanciones:any []=[];
   constructor(private spotify:SpotifyService) {//creamos el objeto srvicio
    this.spotify.getNewReleases()
    .subscribe((data:any)=>{
      console.log(data.albums.items);
      this.nuevasCanciones=data.albums.items
    });
    }

  ngOnInit(): void {
  }

}
