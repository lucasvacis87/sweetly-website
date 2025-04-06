import { Injectable } from '@angular/core';
import { ToastComponent } from './toast/toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toast!: ToastComponent;

  register(toast: ToastComponent) {
    this.toast = toast;
  }

  show(message: string) {
    if (this.toast) {
      this.toast.showToast(message);
    }
  }
}
