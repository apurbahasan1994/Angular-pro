import { Component, EventEmitter, Input, OnInit, Output,ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {
  @Input() user?: User|null;
  @Output() logout = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  logoutUser() {
    this.logout.emit();
  }

}


