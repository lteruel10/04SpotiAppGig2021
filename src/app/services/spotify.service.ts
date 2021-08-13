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
      'Authorization':'Bearer BQCuzjVKKapIc7AlEAtesF8IQ38fIqbkKtbBsz5GXPYysIz9K0Nty6Ybj8YS6LYBO5gKGLj3ElrpiOt4024'
    });
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers})
    // .subscribe(data=>{console.log(data)
    //hacemos return para que doinde sea que se llame se puede poner el . subscribe por ejemplo en el hommecomontes.ts
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20',{headers});
     
  }
}
