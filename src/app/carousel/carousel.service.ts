import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private URI = 'https://api.themoviedb.org/3';
  private KEY = '4581882ce738bbdeafb130c633d39bab';
  constructor(private htpp: HttpClient) {}

  getNextMovies() {
    return this.htpp
      .get(`${this.URI}/movie/upcoming?api_key=${this.KEY}&language=es-ES`)
      .pipe(map((data: any) => data.results));
  }
}
