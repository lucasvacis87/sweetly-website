import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RedesComponent } from './redes/redes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'productos',
    // lazy load del componente Productos
    loadComponent: () =>
      import('./productos/productos.component')
        .then(m => m.ProductosComponent)
  },
  { path: 'contacto', component: ContactoComponent },
  { path: 'redes', component: RedesComponent },
  { path: '**', redirectTo: '' }
];
