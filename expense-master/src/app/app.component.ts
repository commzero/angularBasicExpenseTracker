import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-master';

  constructor(
    private router: Router
  ) {}

  onGoToExpenses() {
    this.router.navigate(['/expenses']);
  }

  onGoToCategories() {
    this.router.navigate(['/categories']);
  }
}
