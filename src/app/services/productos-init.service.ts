import { Injectable } from '@angular/core';
import { ProductosInicio } from '../models/productosInicio.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosInitService {

  constructor() { }

  private productos : ProductosInicio[] = [
    {titulo: "Rendimiento para Profesionales", nombre: "falta", img: "assets/PcNumero1.jpg",
      mensaje: "Computadora diseñada para maximizar la productividad. Ideal para tareas de oficina, programación y más.", descripcion: "falta",caracteristicas: "falta", precio: 1000 
    },
    {titulo: "Perfecta para el Hogar", nombre: "falta", img: "assets/PcNumero2.jpg", 
      mensaje: "Computadoras versátil, perfecta para navegar en internet, estudiar o disfrutar contenido multimedia con una calidad de pantalla.", descripcion: "falta", caracteristicas: "falta", precio: 1000 
    },
    {titulo: "Potencia y Diseño Compacto", nombre: "falta", img: "assets/PcNumero3.jpg", 
      mensaje: "Un equipo elegante, ideal para espacios reducidos, con un rendimiento excepcional para cualquier tarea.", descripcion: "falta", caracteristicas: "falta", precio: 1000 
    },
    {titulo: "Potente Rendimiento Gamer", nombre: "falta", img: "assets/PcNumero4.jpg", 
      mensaje: "Computadora gamer que ofrece un rendimiento excepcional, permitiendo jugar los títulos más exigentes con fluidez y calidad gráfica.", descripcion: "falta", caracteristicas: "falta", precio: 1000 
    },
    {titulo: "Experiencia de Juego Inigualable", nombre: "falta", img: "assets/PcNumero5.jpg", 
      mensaje: "Con esta computadora disfrutas de juegos triple A sin problemas para que te conviertas en un jugador competitivo.", descripcion: "falta", caracteristicas: "falta", precio: 1000 
    },
    {titulo: "Poder en Cada Jugada", nombre: "falta", img: "assets/PcNumero6.jpg", 
      mensaje: "Con el rendimiento excepcional de la computadora, tus jugadas se ejecutan con precisión y fluidez para tus victorias en partidas.", descripcion: "falta", caracteristicas: "falta", precio: 1000 
    },
    {titulo: "Portabilidad y Ligereza Ideal", nombre: "Laptop DELL Inspiron i7", img: "assets/Laptop1.png", 
      mensaje: "Lleva tus trabajos a cualquier lugar con esta laptop ligera y potente. Su batería duradera y diseño cómodo facilitan tu movilidad.", descripcion: "El portátil que satisface las necesidades de tu día a día en tu trabajo y hogar, diseñada para el presente e inspirada para el futuro. Cuenta con las últimas opciones de procesadores Intel Core i7 de última  generación, una estética elegante y un diseño sustentable y reflexivo, con características esenciales para el uso diario.", caracteristicas: "- Procesador: Intel core i7 (12va Generación)\n- Memoria: 16GB de RAM\n- Almacenamiento: 512 GB\n- Pantalla: 15,6″ pulgadas\n- Cámara web", precio: 1000 
    },
    {titulo: "Tu Compañera Ideal de Trabajo", nombre: "Asus Zenbook Ryzen7 (M3402YA-KP666)", img: "assets/Laptop2.png", 
      mensaje: "Una Laptop versatil, potente y ligera, diseñada para estar contigo en cada proyecto y cumplir tus objetivos que deseas.", descripcion: "La elección ideal para quienes buscan potencia y elegancia en un solo dispositivo. Con su diseño ultra fino y rendimiento superior, este equipo está hecho para llevar tu productividad y creatividad al máximo nivel.", caracteristicas: "- Procesador: Ryzen7 7730U\n- Memoria: 16GB RAM\n- Almacenamiento: 1Tb\n- Pantalla: 14 Pulgadas", precio: 1000 
    },
    {titulo: "Eficiencia y Estilo en Uno", nombre: "Laptop Dell Vostro", img: "assets/Laptop3.png", 
      mensaje: "Esta laptop combina un diseño elegante con un rendimiento excepcional, perfecta para profesionales y estudiantes por igual.", descripcion: "La Dell Vostro 5410 i5 es la compañera perfecta para profesionales en movimiento. Con su procesador Intel i5, diseño compacto y elegante, te ofrece un rendimiento ágil y confiable para tus tareas diarias. Ideal para quienes buscan productividad sin sacrificar estilo.", caracteristicas: "- Modelo: Dell Vostro 5410\n- Procesador: I5 (11va Generación)\n- Memoria RAM: 16GB\n- Almacenamiento: 256GB\n- Tarjeta gráfica: MX450-2G\n- Pantalla: 14 Pulgadas", precio: 1000 
    },
  ];

  getProductos(): ProductosInicio[] { return this.productos; }

  getProducto(id: number) : ProductosInicio {
    return this.productos[id];
  }

}
