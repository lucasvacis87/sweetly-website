import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  standalone: true,
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {
  @Input() images: string[] = [];

  currentIndex: number = 0;

  ngOnInit(): void {
    if (!this.images || this.images.length === 0) {
      this.images = [
        '/galeria/tacky.jpeg',
        '/galeria/messi-1.jpeg',
        '/galeria/portada.jpeg',
        '/galeria/angelitos.jpeg',
        '/galeria/bubu.jpeg',
        '/galeria/conejito.jpeg',
        '/galeria/baby-yoda.jpeg',
        '/galeria/bts.jpeg',
        '/galeria/girasol-2.jpeg'
        // Agregá la cantidad de imágenes que necesites
      ];
    }
  }

  previous(): void {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  next(): void {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }
}
