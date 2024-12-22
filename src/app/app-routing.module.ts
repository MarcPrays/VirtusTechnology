import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ProductospcComponent } from './components/productospc/productospc.component';
import { ProductoslaptopComponent } from './components/productoslaptop/productoslaptop.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'productosPc', component: ProductospcComponent},
  {path: 'productosLaptop', component: ProductoslaptopComponent},
  {path: 'contacto', component: ContactoComponent},
  
  {path: 'sobreNosotros', component: SobreNosotrosComponent},
  
  {path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
