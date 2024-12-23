import { Injectable } from '@angular/core';
import { ProductosInicio } from '../models/productosInicio.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosInitService {

  constructor() { }

  private productos : ProductosInicio[] = [
    {titulo: "Rendimiento para Profesionales", nombre: "PC DELL 3070 SFF", img: "assets/PcNumero1.jpg",
      mensaje: "Computadora diseñada para maximizar la productividad. Ideal para tareas de oficina, programación y más.", descripcion: "Esta computadora es perfecta para oficinas, centros educativos y cualquier entorno donde se requiera un equipo confiable y fácil de mantener. Su capacidad para manejar tareas cotidianas con rapidez lo convierte en un aliado valioso para aumentar la productividad.",caracteristicas: "- Procesador: Intel Core i5-9500\n- Memoria RAM: 32 GB\n- Almacenamiento: 512GB SSD\n- Tamaño de pantalla: 22 pulgadas\n- Tarjeta grafica: NVIDIA 730", precio: 3900 
    },
    {titulo: "Perfecta para el Hogar", nombre: "Mini PC EXO Bitsy X6-S7285M", img: "assets/PcNumero2.jpg", 
      mensaje: "Computadoras versátil, perfecta para navegar en internet, estudiar o disfrutar contenido multimedia con una calidad de pantalla.", descripcion: "El Mini PC EXO Bitsy X6-S7285M es perfecto para usuarios que requieren un equipo versátil y eficiente, ideal para tareas de oficina, navegación web, y aplicaciones multimedia. Su diseño compacto lo hace adecuado para escritorios pequeños o configuraciones donde el espacio es limitado.", caracteristicas: "- Procesador: Intel Core i7-12700\n- Memoria RAM: 8GB\n- Almacenamiento: 480GB SSD\n- Tamaño de pantalla: 24 pulgadas\n- Tarjeta grafica: Integrada ", precio: 4800 
    },
    {titulo: "Potencia y Diseño Compacto", nombre: "Basica DELL", img: "assets/PcNumero3.jpg", 
      mensaje: "Un equipo elegante, ideal para espacios reducidos, con un rendimiento excepcional para cualquier tarea.", descripcion: "Perfecta para escuelas y usuarios domésticos que requieren un equipo confiable para tareas cotidianas. Su capacidad para manejar aplicaciones de productividad lo convierte en una herramienta esencial para aumentar la eficiencia.", caracteristicas: "- Procesador: Intel Core i3 4130\n- Memoria RAM: 8GB\n- Almacenamiento: 120 GB SSD\n- Tamaño de pantalla: 19 pulgadas\n- Tarjeta grafica: Integrada", precio: 2500
    },
    {titulo: "Potente Rendimiento Gamer", nombre: "Vibox V-46 PC GAMING", img: "assets/PcNumero4.jpg", 
      mensaje: "Computadora gamer que ofrece un rendimiento excepcional, permitiendo jugar los títulos más exigentes con fluidez y calidad gráfica.", descripcion: "Este PC Gaming es perfecto tanto para jugadores ocasionales como para entusiastas que buscan un equipo capaz de ofrecer un rendimiento sólido en juegos actuales. Su configuración equilibrada lo hace adecuado también para tareas de productividad como edición de video, diseño gráfico y más.", caracteristicas: "- Procesador: AMD Ryzen 5 4500\n- Memoria RAM: 16GB DDR4\n- Almacenamiento: 480GB SSD\n- Tamaño de pantalla: 24 pulgadas\n- Tarjeta grafica: NVIDIA RTX 3050", precio: 7000
    },
    {titulo: "Experiencia de Juego Inigualable", nombre: "Xtreme PC Gaming CM-50228", img: "assets/PcNumero5.jpg", 
      mensaje: "Con esta computadora disfrutas de juegos triple A sin problemas para que te conviertas en un jugador competitivo.", descripcion: "La Computadora Xtreme PC Gaming CM-50228 está diseñada para ofrecer un rendimiento excepcional en juegos y tareas exigentes. Equipado con un procesador AMD Ryzen 5 5500, que cuenta con 6 núcleos y una frecuencia turbo de hasta 4.40 GHz, este sistema proporciona la potencia necesaria para ejecutar aplicaciones y juegos de última generación.", caracteristicas: "Procesador: AMD Ryzen 5 5500\n- Memoria RAM: 16GB DDR4\n- Almacenamiento: 500GB SSD\n- Tamaño de pantalla: 27 pulgadas\n- Tarjeta grafica: Geforce GTX 1650", precio: 7200 
    },
    {titulo: "Poder en Cada Jugada", nombre: "Rype Gamer", img: "assets/PcNumero6.jpg", 
      mensaje: "Con el rendimiento excepcional de la computadora, tus jugadas se ejecutan con precisión y fluidez para tus victorias en partidas.", descripcion: "Ideal para trabajar programas como Photoshop, Illustrator, Corel Draw y mas. Un equipo economico con el cual podras utilizar juegos como CS GO, Fornite, League of Legends, Valorant, entre muchos otros.", caracteristicas: "- Procesador: Intel Core i5-4570 3,20GHz\n- Memoria RAM: 16GB DDR3\n- Almacenamiento: 480GB SSD\N- Tamaño de pantalla: 19 pulgadas\n- Tarjeta grafica: NVIDIA Geforce GT1030 4GB", precio: 4000 
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
