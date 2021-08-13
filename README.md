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


### ya no es necesario importar el servicio en app.module ts siempre yc cuando 
en el servicio el decorador @Injectable este asi:
* @Injectable({
  providedIn: 'root'//importa automaticamente  los serfvicios, ya lo hace angular solito
})



###  <!-- #termino es para capturar el valor del textbpx --> capturar la referencia local
       <input #termino type="text" (keyup)="buscar()" class="form-control" placeholder="Buscarartista">


##### CARDS MASONRY
<div class="card-columns">
    <div *ngFor="let artista of artistas" class="card">
        <img [src]="artista.images[0].url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{artista.name}}</h5>
        <p class="card-text">
            <span *ngFor="let artista of artistas"  class="badge rounded-pill bg-primary">
              {{artista.name}}
            </span>
          </p>

      </div>
    </div>
</div>

* * y en styles.css poner
@media (min-width: 768px) {  
    .card-columns {column-count: 4;}
  }
  
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
   .card-columns {column-count: 4;}
  }
   
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {  
     .card-columns {column-count: 5;} 
  }
