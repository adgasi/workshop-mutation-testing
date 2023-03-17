import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workshop-mutation-testing';

  user1 = {
    name: 'John',
    age: null,
  };

  user2 = {
    name: 'John',
    yearOfBirth: null,
  };

  showIsOldEnoughSimpleResult = false;
  showResultPZU = false;

  isOldEnoughSimple() {
    this.user1 = { ...this.user1 };
    this.showIsOldEnoughSimpleResult = true;
  }

  isOldEnoughPZU() {
    this.user2 = { ...this.user2 };
    this.showResultPZU = true;
  }
}
