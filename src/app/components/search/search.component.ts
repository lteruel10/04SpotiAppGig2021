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
  loading :boolean=false;
  artistas:any[]=[];

  constructor(private spotify:SpotifyService) { }
  buscar(termino:string){
      this.loading=true;
      this.spotify.getArtist(termino)
      .subscribe((data:any)=>{
      console.log(data);
      this.artistas=data;
      this.loading=false;
    });

  }

  ngOnInit(): void {
  }

}
