import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-list by Saud Alsiyabi/s00191171';
  movies=[{ id:0 , title: '', year: '', director: '' }];
  constructor(private movieService:MovieService){}

  ngOnInit()
  {
this.movies=this.movieService.getMovies();
console.log(this.movies);
  }
}
