import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
 @Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  // @Input() artista: any[]= [];
  artista:any={};//objeto vacio
  loadingArtist:boolean=true;

  ///caputar parametros de la ruta
  constructor(private router:ActivatedRoute, private spotify:SpotifyService) { 
    this.router.params.subscribe(params=>
      this.getArtista(params['id']));//capturamos los parametros de la ruta
      this.loadingArtist=true;


      
  }

  getArtista(id:string){
    this.loadingArtist=true;


    this.spotify.getArtist(id).subscribe(artista=>{
       console.log(artista);
       this.artista=artista;
       this.loadingArtist=false;
    });

  }

  ngOnInit(): void {
  }

}
