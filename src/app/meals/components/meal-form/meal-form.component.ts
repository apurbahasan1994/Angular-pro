import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Meal } from 'src/app/shared/services/meal.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnInit {
  toggled = false;
  exists = false;
  @Input() meal:Meal;
  @Output() public create: EventEmitter<Meal> = new EventEmitter<Meal>();
  @Output() public update: EventEmitter<Meal> = new EventEmitter<Meal>();
  @Output() public delete: EventEmitter<Meal> = new EventEmitter<Meal>();
  constructor(private fb: FormBuilder) { }
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  })
  ngOnInit(): void {
  }
  createMeal() {
    this.create.emit(this.form.value);
  }
  get ingredients() {
    return (this.form.get('ingredients') as FormArray);
  }
  removeIngredient(index:number){
    this.ingredients.removeAt(index);
  }
  addIngredient(){
    this.ingredients.push(new FormControl(''));
  }
  get required(){
    return (
      this.form.get('name')?.hasError('required') &&
      this.form.get('name')?.touched
    );
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['meal'].currentValue);
    if (this.meal && this.meal.name) {
      this.exists = true;
      this.emptyIngredients();

      const value = this.meal;
      this.form.patchValue(value);

      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }

    }
  }
  emptyIngredients() {
    while(this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }
  toggle() {
    this.toggled = !this.toggled;
  }
  removeMeal() {
    this.delete.emit(this.form.value);
  }

}
