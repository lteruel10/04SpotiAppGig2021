import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//importa automaticamente  los serfvicios, ya lo hace angular solito
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Srvicio spotify listo')
  }

  getNewReleases(){
    const headers=new HttpHeaders({//esto es para agregar las autorizaciones y token de spotify
      'Authorization':'Bearer BQArEz8bvQQxwFG_dpjz-7_J78e_TieZuNBYL6vHdOgJ36FuzLn8EyzFoH-WTY0JBkZljt69QsIi6UvirkY'
    });
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers})
    // .subscribe(data=>{console.log(data)
    //hacemos return para que doinde sea que se llame se puede poner el . subscribe por ejemplo en el hommecomontes.ts
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers});   
  }//getnewreleases

  getArtist(termino:string){
    const headers=new HttpHeaders({//esto es para agregar las autorizaciones y token de spotify
      'Authorization':'Bearer BQArEz8bvQQxwFG_dpjz-7_J78e_TieZuNBYL6vHdOgJ36FuzLn8EyzFoH-WTY0JBkZljt69QsIi6UvirkY'
    });
  
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=us&limit=20`,{headers});   
  }//getArtist



}//class
