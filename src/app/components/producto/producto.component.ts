import { Component, OnInit } from '@angular/core';
import { ProductosInicio } from '../../models/productosInicio.models';
import { ActivatedRoute } from '@angular/router';
import { ProductosInitService } from '../../services/productos-init.service';

@Component({
  selector: 'app-producto',
  standalone: false,
  
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  
  producto : ProductosInicio = new ProductosInicio();

  constructor(private activatedRoute : ActivatedRoute, private _productosService : ProductosInitService) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.producto = this._productosService.getProducto(parseInt(id));
  }
}
