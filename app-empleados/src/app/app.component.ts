import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  cuadroNombre: String = "";
  cuadroApellido: String = "";
  cuadroCargo: String = "";
  cuadroSalario: number = 0;

  /* Creo una pequeña lista de empleados antes de empezar a almacenar desde el formulario */
  empleados: Empleado[] = [
    new Empleado("Nagib", "Delgado", "Presidente", 7500),
    new Empleado("Celia", "Bosque", "Vice Presidenta", 5500),
    new Empleado("Nadira", "Delgado", "Asesora", 2500),
    new Empleado("Begoña", "Morales", "Empleada", 1500)
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //Antes de añadir el empleado, quiero hacer uso del servicio que acabamos de crear
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }

  /* Constructor para el servicio, con esto inyectamos el servicio que hemos creado */
  constructor(private miServicio: ServicioEmpleadosService){

  }

}
