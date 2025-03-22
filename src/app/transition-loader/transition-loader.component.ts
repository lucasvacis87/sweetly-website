import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-transition-loader',
  templateUrl: './transition-loader.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./transition-loader.component.css'],
  standalone: true
})
export class TransitionLoaderComponent {
  show = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        document.body.classList.add('loading');
        this.show = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.show = false;
          document.body.classList.remove('loading');
        }, 1000);
      }

    });
  }

}
