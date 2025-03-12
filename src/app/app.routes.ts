import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RedesComponent } from './redes/redes.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'redes', component: RedesComponent },
  { path: '**', redirectTo: '' }
];
