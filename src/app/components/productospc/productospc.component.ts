import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos.models';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productospc',
  standalone: false,
  
  templateUrl: './productospc.component.html',
  styleUrl: './productospc.component.css'
})
export class ProductospcComponent implements OnInit{
  productosPc: Productos[] = []

  constructor(private _productosService: ProductosService){

  }

  ngOnInit(): void {
    this.productosPc = this._productosService.getProductos();
  }

}
