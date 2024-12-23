import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ProductospcComponent } from './components/productospc/productospc.component';
import { ProductoslaptopComponent } from './components/productoslaptop/productoslaptop.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { OfertasDescuentosComponent } from './pages/ofertas-descuentos/ofertas-descuentos.component';

import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ProductoComponent,
    SobreNosotrosComponent,
    ProductospcComponent,
    ProductoslaptopComponent,
    ContactoComponent,
    OfertasDescuentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
