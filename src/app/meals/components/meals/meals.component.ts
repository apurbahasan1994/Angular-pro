import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';
import { Meal, MealService } from 'src/app/shared/services/meal.service';
import { Store } from 'store';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  meals$:Observable<any[]>;
  subscription:Subscription;
  
  meals:AngularFireList<Meal>
  constructor(private mealService:MealService,private store:Store) { }

  ngOnInit(): void {
    this.meals$=this.store.select<any[]>('meals');
    this.subscription=this.mealService.meals.subscribe();
    
  }
  removeMeal(event: Meal) {
    this.mealService.removeMeal(event);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
