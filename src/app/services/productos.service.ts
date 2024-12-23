import { Injectable } from '@angular/core';
import { Productos } from '../models/productos.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  private productosTienda : Productos[] = [
    {nombre: "Acer Nitro 5", img: "assets/Laptop4.jpg", caracteristicas: "- Procesador: Intel Core i7-12650H\n- Memoria RAM: 16GB\n- Almacenamiento: 1TB SSD\n- Tamaño de pantalla: 15.6' FHD\n- Tarjeta grafica: NVIDIA Geforce RTX 3070 8GB", precio: 10200},
    {nombre: "Asus ROG Strix SCAR (2024)", img: "assets/Laptop5.jpg", caracteristicas: "- Procesador: Intel Core i9-14900HX\n- Memoria RAM: 64 GB\n- Almacenamiento: 4TB SSD\n- Tarjeta gráfica: NVIDIA GeForce RTX 4090", precio: 11000},
    {nombre: "ASUS ROG Zephyrus G14", img: "assets/Laptop6.jpg", caracteristicas: "- Procesador: AMD Ryzen 9 6900HS\n- Memoria RAM: Hasta 32 GB DDR5\n- Almacenamiento: 512GB SSD M.2\n- Tamaño de pantalla: 14' QHD+\n- Tarjeta gráfica: AMD Radeon RX 6800S", precio: 11500},
    {nombre: "Acer Aspire 5 Slim", img: "assets/Laptop7.jpg", caracteristicas: "- Intel Core i5-1135G7\n- Memoria RAM: 8GB\n- Almacenamiento: 256GB PCIe NVMe\n- Tamaño de pantalla: 15.6' Full HD\n- Tarjeta gráfica: Intel Iris Xe Graphics", precio: 12100},
    {nombre: "Hp Victus 15", img: "assets/Laptop8.png", caracteristicas: "- Procesador: AMD Ryzen 7 5800H\n- Memoria RAM: 16GB DDR4-3200 MHz\n- Almacenamiento: 2TB SSD M.2\n- Tamaño de pantalla: 15.6' Full HD\n- Tarjeta gráfica: NVIDIA GeForce RTX 3050 Ti", precio: 11300},
    {nombre: "MSI THIN GF63", img: "assets/Laptop9.jpeg", caracteristicas: "- Procesador: Intel Core i7-10750H\n- Memoria RAM: 16GB DDR4\n- Almacenamiento: 512GB SSD NVMe\n- Tamaño de pantalla: 15.6' Full HD\n- Tarjeta gráfica: NVIDIA GeForce GTX 1650", precio: 10450},
    {nombre: "Lenovo Legion 5", img: "assets/Laptop10.jpg", caracteristicas: "- Procesador:  Intel Core i7-10750H\n- Memoria RAM: 16GB DDR4-3200\n- Almacenamiento: 512GB SSD\n- Tamaño de pantalla: 15.6' Full HD", precio: 1000},
    {nombre: "Lenovo Ideapad Gaming", img: "assets/Laptop11.jpg", caracteristicas: "- Procesador: Intel Core i5-12450H\n- Memoria RAM: 8GB DDR4-3200\n- Almacenamiento: 512GB SSD\n- Tamaño de pantalla: 15.6' Full HD\n- Tarjeta gráfica: NVIDIA GeForce RTX 3050\n- Camara Web: HD 720p", precio: 11340},
    {nombre: "PC Gaming AMD", img: "assets/PcNumero7.png", caracteristicas: "- Procesador: AMD Ryzen 5 5600G\n- Tarjeta Madre: Gigabyte A520M DS3H V2\n- Memoria RAM: 16GB (2*8) HyperX Fury DDR4\n- Almacenamiento: 256GB SSD M.2\n- Tarjeta de video:  	PNY GeForce RTX 2060 SUPER 8GB\n- Case / Gabinete: Antec AX20 Elite (4 Coolers 120mm)", precio: 7600},
    {nombre: "PC Intel Titanium Nasa", img: "assets/PcNumero8.png", caracteristicas: "- Procesador: Intel Core i7 14700KF\n- Tarjeta Madre: ASUS TUF Gaming B660M-PLUS\n- Memoria RAM: 32GB (16*2) Corsair Vengeance RGB DDR4\n- Almacenamiento: Kingston 960GB SSD\n- Tarjeta de video: ASUS TUF RTX 4070 Ti SUPER 16GB\n- Case / Gabinete: Antec DF800 Flux (4 Coolers ARGB)", precio: 25.550},
    {nombre: "PC Work/Gaming AM5", img: "assets/PcNumero9.png", caracteristicas: "- Procesador: AMD Ryzen 5 7600X\n- Tarjeta Madre: MSI PRO B650M-A WIFI\n- Memoria RAM: 64GB (4x16) Corsair Vengeance RGB DDR5\n- Almacenamiento: Kingston 960GB - SSD\n- Tarjeta de video: Asrock Radeon™ RX 6900 XT OC Formula 16GB\n- Case / Gabinete: Pure Base 500DX - Elegante (3 coolers)", precio: 18.640},
    {nombre: "PC Gaming Plata INTEL", img: "assets/PcNumero10.png", caracteristicas: "- Procesador: Intel Core i3-13100\n- Tarjeta Madre: ASrock B660M-HDV DDR4\n- Memoria RAM: 16GB (2x8) Corsair Vegeance RGB DDR4\n- Almacenamiento: Kingston 960GB - SSD", precio: 7.240},
    {nombre: "PC Gaming AMD BLANCO", img: "assets/PcNumero11.png", caracteristicas: "- Procesador: AMD Ryzen 5 5600G\n- Tarjeta Madre: ASUS PRIME A520M-K\n- Memoria RAM: 16GB (2x8) HyperX Fury\n- Almacenamiento: Kingston 960GB - SSD\n- Tarjeta de video: Integrada del procesador\n- Case / Gabinete: Gamdias Argus E4 Elite (1 cooler 120mm)", precio: 4.440},
    {nombre: "PC Gaming NASA Diamante", img: "assets/PcNumero12.png", caracteristicas: "- Procesador: AMD Ryzen 9 5900X\n- Tarjeta Madre: Asus ROG STRIX B550-F GAMING\n- Memoria RAM: 64GB (4x16) Apacer Nox RGB DDR4\n- Almacenamiento: Kingston 960GB - SSD\n- Tarjeta de video: ASUS TUF RTX 4070 Ti SUPER 16GB\n- Case / Gabinete: Corsair SPEC-DELTA RGB (3 Coolers RGB + 1 Cooler)", precio: 25.550},
    {nombre: "PC Gaming Oro AMD", img: "assets/PcNumero13.png", caracteristicas: "- Procesador: AMD Ryzen 5 7600X\n- Tarjeta Madre: MSI PRO A620M-E\n- Memoria RAM: 32GB (2x16) Corsair Vengeance RGB DDR5\n- Almacenamiento: Kingston 960GB - SSD\n- Tarjeta de video: Gigabyte GeForce RTX™ 4060 Ti\n- Case / Gabinete: Kolink Observatory Lite (4 Coolers ARGB)", precio: 11.800},
    {nombre: "PC Gaming Oro Plus Intel", img: "assets/PcNumero14.png", caracteristicas: "- Procesador: Intel Core i7-12700\n- Tarjeta Madre: ASrock B760M PG SONIC WiFi\n- Memoria RAM: 16GB (2*8)XPG Lancer DDR5\n- Almacenamiento: Colorful SL500 256GB\n- Tarjeta de video: MSI GeForce RTX™ 4060 Ti\n- Case / Gabinete: Pure Base 500 Window - Elegante", precio: 14.970}
  ];



  getProductos(): Productos[] { return this.productosTienda; }



}
