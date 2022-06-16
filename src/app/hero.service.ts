import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { of, Observable } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private messagesService: MessagesService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`error ${error}`);
      return of(result as T);
    };
  }

  getHeroe(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.log('Se ha encontrado un héroe');
    return of(hero);
  }

  private log(message: string) {
    this.messagesService.add(`Hero service: ${message}`);
  }
}
