import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit
{
  constructor(private heroService: HeroService, private router: Router) { }
  heroes;
  selectedHero: Hero;

  gotoDetail(): void
  {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void
  {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
