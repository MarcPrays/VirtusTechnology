import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos.models';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-productoslaptop',
  standalone: false,
  
  templateUrl: './productoslaptop.component.html',
  styleUrl: './productoslaptop.component.css'
})
export class ProductoslaptopComponent implements OnInit {

  productosLaptops : Productos[] = []

  constructor(private _productosService: ProductosService){

  }

  ngOnInit(): void {
    this.productosLaptops = this._productosService.getProductos()
  }
}
