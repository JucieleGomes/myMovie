import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataBaseService {
  private readonly _KEY = '8820cbd95de8c7b969ad900a8ac7801f';
  private readonly _URL = `https://api.themoviedb.org/3/discover/movie?api_key=${this._KEY}&include_adult=false&include_video=false&language=en-US&page=1&language=pt&page=`;

  constructor(private readonly _HTTP: HttpClient) {}

  getMovies(page: number, gener?: any): Observable<any> {
    if (gener !== undefined) {
      return this._HTTP.get(`${this._URL}${page}&with_genres=${gener}`);
    } else {
      return this._HTTP.get(`${this._URL}${page}`);
    }
  }

  getMovie(id: number): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this._KEY}&language=pt`);
  }

  getGenderList(): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this._KEY}&language=pt`);
  }

  getMoviesByGender(genreId: number): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=${genreId}&api_key=${this._KEY}`);
  }

  getSort(sortBy:string): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this._KEY}&include_adult=false&include_video=false&language=pt-US&page=1&sort_by=${sortBy}`);
  }
}
