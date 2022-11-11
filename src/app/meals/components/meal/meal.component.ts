import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Meal, MealService } from 'src/app/shared/services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  meal$:Observable<any>;

  constructor(private _mealService: MealService, private _router: Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.meal$=this.activeRoute.params.pipe(switchMap<any,any>((param:Params)=>{
      return this._mealService.getMeal(param['id']??"");
    }))
  }
  addMeal(event: Meal) {
    this._mealService.addMeal(event);
    this.backToMeals();
  }
  backToMeals() {
    this._router.navigate(['meals'])
  }
  updateMeal(event:Meal){

  }
  deleteteMeal(event:Meal){

  }

}
