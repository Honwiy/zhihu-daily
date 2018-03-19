import { Component } from '@angular/core';
import { trigger, state, transition, style } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [state('green', style({'background-color': 'green'}))])
  ]
})
export class AppComponent {
  title = 'app';
}
