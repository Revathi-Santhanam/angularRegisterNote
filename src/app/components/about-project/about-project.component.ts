import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.css'],
})
export class AboutProjectComponent {
  constructor(private router: Router) {}
  move() {
    this.router.navigate(['/register']);
  }
}
