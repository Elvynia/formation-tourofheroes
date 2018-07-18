import { Component, ViewChild, OnInit } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string;
	newHeroName: string;

	@ViewChild(HeroesComponent)
	heroesComponent: HeroesComponent;

	constructor(private heroService: HeroService) {
		this.title = 'Mon super tour of Heroes';
	}

	ngOnInit() {
		this.heroService.loadMock();
	}

	validateHero(event: any, form: NgForm) {
		let hero: Hero = new Hero();
		hero.name = this.newHeroName;
		this.heroesComponent.heroes.push(hero);
		form.resetForm();
	}
}
