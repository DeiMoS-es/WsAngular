import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  empleados: Empleado[] = [
    new Empleado("Nagib", "Delgado", "Presidente", 7500),
    new Empleado("Celia", "Bosque", "Vice Presidenta", 5500),
    new Empleado("Nadira", "Delgado", "Asesora", 2500),
    new Empleado("Begoña", "Morales", "Empleada", 1500)
  ];

  agregarEmpleadoServicio(empleado: Empleado){
    this.empleados.push(empleado);
  }
}
