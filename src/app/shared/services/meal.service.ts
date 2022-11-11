import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  meals: Observable<Meal[]> = of(meals).pipe(tap((data) => {
    this.store.set('meals', data)
  }))
  constructor(private store: Store, private db: AngularFireDatabase, private authService: AuthService) {
  }
  get uid() {
    let uid: any = '';
    this.authService?.user?.subscribe(user => {
      uid = user?.uid;
    });
    if (uid) {
      return uid;
    }
    return '';
  }
  async getMeal(key: string) {
    const data = await new Promise((resolve, reject) => {

      setTimeout(() => {

        if (!key) {
         resolve({})
        }
        resolve(meals.find(x => x.key == key));

      }, 500);

    });
    return of(data);

  }
  addMeal(meal: Meal) {
    meals.push(meal);
    this.store.set('meals', meals);
  }
  removeMeal(m: Meal) {
    meals = meals.filter(meal => meal !== m);
    this.store.set('meals', meals);

  }
}
export interface Meal {
  key: string;
  name: string;
  ingredients: string[];
  timestamp: number;
  $exists: () => boolean
}

let meals: Meal[] = [
  {
    key: '1',
    name: "Healthy food",
    ingredients: ['paper', 'rice'],
    timestamp: new Date().valueOf(),
    $exists: () => true
  },
  {
    key: '2',
    name: "Healthy food",
    ingredients: ['paper', 'rice'],
    timestamp: new Date().valueOf(),
    $exists: () => true
  },
  {
    key: '3',
    name: "Healthy food",
    ingredients: ['paper', 'rice'],
    timestamp: new Date().valueOf(),
    $exists: () => true
  }
]