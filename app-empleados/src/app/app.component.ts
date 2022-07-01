import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  /* Creo una pequeña lista de empleados antes de empezar a almacenar desde el formulario */
  empleados: Empleado[] = [
    new Empleado("Nagib", "Delgado", "Presidente", 7500),
    new Empleado("Celia", "Bosque", "Vice Presidenta", 5500),
    new Empleado("Nadira", "Delgado", "Asesora", 2500),
    new Empleado("Begoña", "Morales", "Empleada", 1500)
  ];
}
