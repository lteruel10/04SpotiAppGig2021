# Peticiones HTTP
* *  permite realizar peticions HTTP
import{HttpClientModule} from '@angular/common/http'  ///app.module.ts
* si lleva module hay que importarlo
* imports:[... HttpClientModule]....

* * home.commpontes.ts
import { HttpClient } from '@angular/common/http';

  paises:any[]=[];///
  //trabajamos el constructor
  constructor(private http:HttpClient) {
    console.log('Constructor de Home hecho');
      this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((respuesta:any)=>{
        console.log(respuesta);
        this.paises=respuesta;
      });

* * la implemenacion en home.componets.html
<ul>
    <li *ngFor="let pais of paises let i=index">
     {{i+1}}   {{pais.name}} - {{pais.capital}}
    </li>
</ul>
