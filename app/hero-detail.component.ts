import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { RouteParams } from '@angular/router-deprecated';


@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
    ) {}

    ngOnInit() {
      let id = +this.routeParams.get('id');
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    }

  @Input() hero: Hero;
}
