import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggleState: boolean = false;
  title = 'firebase-app';

  toggleNav() {
    this.toggleState = !this.toggleState;
  }
}
