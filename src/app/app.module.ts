import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulo HTTP
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
