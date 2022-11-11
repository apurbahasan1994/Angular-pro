import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../../services/meal.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove = new EventEmitter<any>();
  toogled = false;

  constructor() { }

  ngOnInit(): void {
  }
  getRoute(item: any) {
    return [`../meals`, item.key]
  }
  removeItem() {

    this.remove.emit(this.item);
  }
  toogle() {
    this.toogled = !this.toogled;
  }

}
