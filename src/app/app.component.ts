import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showOrhide: boolean = true;
  count: number = 0;
  log: number[] = [];

  toggle() {
    this.showOrhide = !this.showOrhide;
    this.log.push(this.count++);
  }
}
