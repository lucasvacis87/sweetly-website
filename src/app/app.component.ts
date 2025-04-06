import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FloatingButtonsComponent } from "./floating-buttons/floating-buttons.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { TransitionLoaderComponent } from './transition-loader/transition-loader.component';
import { filter } from 'rxjs';
import { ViewChild } from '@angular/core';
import { ToastComponent } from './shared/toast/toast.component';
import { ToastService } from './shared/toast.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    FloatingButtonsComponent,
    FooterComponent,
    NavBarComponent,
    TransitionLoaderComponent,
    CommonModule,
    ToastComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sweetly-website';
  isLoading = false;


  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  @ViewChild(ToastComponent) toast!: ToastComponent;


  ngAfterViewInit(): void {
    this.toastService.register(this.toast);
  }

  constructor(private router: Router, private toastService: ToastService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd) {
        // Espera a que la animación del loader se vea (ej: 800ms)
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      }
    });
  }

}
