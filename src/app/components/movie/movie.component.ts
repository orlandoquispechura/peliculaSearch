import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: any[] = [];
  menssage: string = 'No se encontro películas';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  getMovies(searchMovie: string) {
    this.movieService.getMovies(searchMovie).subscribe((movies) => {
      this.movies = movies !== undefined ? movies : [];
    });
  }
}
