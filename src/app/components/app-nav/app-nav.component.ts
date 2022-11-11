import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
