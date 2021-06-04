import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor(private http: HttpClient) {}
  public films: Array<number> = []
  
  getFilm(id: number | any): Observable<any> {
      this.films.push(id)
      return this.http.get('album/1/photos', {params: { id }});
  }
}
