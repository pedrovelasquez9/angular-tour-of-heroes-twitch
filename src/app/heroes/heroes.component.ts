import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from './../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add(
      `Hero component: has seleccionado al héroe con id=${this.selectedHero.id}`
    );
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
