import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  MovieList=[
    {id:1,title:'The God Father', year:'1972', director:'Francis Ford Coppola'},
    {id:2,title:'SpiderMan-far from home', year:'2021', director:'Jon Watts'},
    {id:3,title:'Unchartred', year:'2022', director:'William Kane'},
    {id:1,title:'Mortal Kombat', year:'2021', director:'Tom David'}];

    getMovies()
    {
      return this.MovieList;

    }

}
