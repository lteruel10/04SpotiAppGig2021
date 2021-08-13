import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//funciona como un aspersor porque ayuda distribuir o configurar la
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'//importa automaticamente  los serfvicios, ya lo hace angular solito
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Srvicio spotify listo')
  }

  getNewReleases(){
    const headers=new HttpHeaders({//esto es para agregar las autorizaciones y token de spotify
      'Authorization':'Bearer BQDwWO-1A7lmx85g-V-M67hwyNb2s4IxucvKi0Ue2uOchsHOZlJpelJbHkSZYolO-js50ySGWOxUTeB87Es'
    });
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers})
    // .subscribe(data=>{console.log(data)
    //hacemos return para que doinde sea que se llame se puede poner el . subscribe por ejemplo en el hommecomontes.ts
    //  return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers});   
    
     ///ahora con el metodo map
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers})
     .pipe(map((data:any)=>{
       return data['albums'].items;

     }));

 
    }//getnewreleases

  getArtist(termino:string){
    const headers=new HttpHeaders({//esto es para agregar las autorizaciones y token de spotify
      'Authorization':'Bearer BQDwWO-1A7lmx85g-V-M67hwyNb2s4IxucvKi0Ue2uOchsHOZlJpelJbHkSZYolO-js50ySGWOxUTeB87Es'
    });
  
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=us&limit=20`,{headers})
    .pipe(map((data:any)=>{data['artists'].items;
    }));
 ///el .pipe anterior era...asiu... pero se puede condensar xq es de una sola linea... se elimina el RETURN   porque va implicito
//  .pipe(map((data:any)=>{
//   return data['artists'].items;
  
  }//getArtist



}//class
