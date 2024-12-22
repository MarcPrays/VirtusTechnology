import { Component, OnInit } from '@angular/core';
import { ProductosInicio } from '../../models/productosInicio.models';
import { ProductosInitService } from '../../services/productos-init.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  productosInicio : ProductosInicio[] = []

  constructor(private _productosInitService: ProductosInitService, private router: Router) {

  }
  // almacena en el array todos los productos
  ngOnInit(): void {
    this.productosInicio = this._productosInitService.getProductos()
  }

  // Cuando llamen a este metodo, vamos a redireccionar al card que hemos creado
  verProducto(idx: number){
    this.router.navigate(['producto', idx])
  }

}
