import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { of, Observable } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add('Hero Service: Los héroes han llegado');
    return heroes;
  }
}
