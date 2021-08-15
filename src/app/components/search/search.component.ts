import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  @Input() items:any[]=[];

  artistas:any[]=[];
  constructor(private spotify:SpotifyService) { }
  buscar(termino:string){
   // console.log(termino)
    this.spotify.getArtist(termino)
    .subscribe((data:any)=>{
      console.log(data);
      this.artistas=data;
    });

  }

  ngOnInit(): void {
  }

}
