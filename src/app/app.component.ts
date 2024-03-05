import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentFeature = 'recipe';

  onNavigate(feature: string) {
    this.currentFeature = feature;
  }
}
