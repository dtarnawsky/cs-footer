import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Array<string> = [];
  constructor() {
    for (let i = 0; i < 250; i++) {
      this.items.push(`This is item ${i}`);
    }
  }
}
