import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
	private subject: BehaviorSubject<Array<Hero>>;

	constructor() {
		this.subject = new BehaviorSubject(new Array());
	}

	get heroes(): Observable<Array<Hero>> {
		return this.subject.asObservable();
	}

	loadMock() {
		let mock: Array<Hero> = [
			{
				id: 0,
				name: 'Link'
			},{
				id: 1,
				name: 'Linkle'
			},{
				id: 2,
				name: 'Zelda'
			},{
				id: 3,
				name: 'Impa'
			},{
				id: 4,
				name: 'Lana'
			},{
				id: 5,
				name: 'Cya'
			},{
				id: 6,
				name: 'Ruto'
			},{
				id: 7,
				name: 'Machaon'
			},{
				id: 8,
				name: 'Midona'
			},{
				id: 9,
				name: 'Darunia'
			}
		];
		this.subject.next(mock);
	}
}
