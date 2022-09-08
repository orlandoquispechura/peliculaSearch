import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../interface/movie';
import { apiResponse } from '../interface/response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 // key = a953f8e1
  private apiUrl: string = environment.apiUrl;
  private key:string = 'a953f8e1'+'&s=';
  constructor(private http: HttpClient) { }

  getMovies(searchMovie: string):Observable<Movie[]>{
    return this.http.get<apiResponse>(`${this.apiUrl}${this.key}${searchMovie}`).pipe(
      map(reponse=>{
        return reponse.Search;
      })
    )
  }
}
