import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

//para rutas
import{RouterModule} from '@angular/router'
import { ROUTES } from './app.routes';

//pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//servicios
// import { SpotifyService } from './services/spotify.service'; es opcional si esta el  providedIn: 'root'
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [
    // SpotifyService  es opcional si esta el  providedIn: 'root'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
