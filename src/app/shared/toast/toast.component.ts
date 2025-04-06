import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="toast" *ngIf="show" [ngClass]="{ show: show }">{{ message }}</div>`,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message: string = 'Mensaje';
  show: boolean = false;

  showToast(msg: string) {
    this.message = msg;
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 2000);
  }

}
