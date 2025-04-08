import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message: string = 'Producto agregado al carrito';
  show: boolean = false;
  animatingToCart: boolean = false;

  showToast(msg: string) {
    this.message = msg;
    this.show = true;
    this.animatingToCart = false;

    // Mostrar con efecto bounce primero
    setTimeout(() => {
      this.animatingToCart = true; // comienza el vuelo al carrito
    }, 1000);
  }

  onAnimationEnd() {
    if (this.animatingToCart) {
      this.show = false;
      this.animatingToCart = false;

      const cartIcon = document.getElementById('cart-icon');
      if (cartIcon) {
        cartIcon.classList.remove('animate'); // prevent overlapping
        void cartIcon.offsetWidth; // force reflow
        cartIcon.classList.add('animate');
      }
    }
  }

}
