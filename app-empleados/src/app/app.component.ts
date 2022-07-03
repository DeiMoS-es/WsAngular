import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';
  cuadroNombre: String = "";
  cuadroApellido: String = "";
  cuadroCargo: String = "";
  cuadroSalario: number = 0;

  /* Creo una pequeña lista de empleados antes de empezar a almacenar desde el formulario */
/* Lo comento, porque acabo de crear el servicio el array de empleados
  empleados: Empleado[] = [
    new Empleado("Nagib", "Delgado", "Presidente", 7500),
    new Empleado("Celia", "Bosque", "Vice Presidenta", 5500),
    new Empleado("Nadira", "Delgado", "Asesora", 2500),
    new Empleado("Begoña", "Morales", "Empleada", 1500)
  ]; */
  empleados: Empleado[] = [] //debemos dejar un array vacio para que cuando inyete la info del servicio se almacene en este array

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //Antes de añadir el empleado, quiero hacer uso del servicio que acabamos de crear
   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre); no la neesito porque ya lo he inyectado en el empleados.service.ts
    //this.empleados.push(miEmpleado); lo uso tambien en el servicio
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);//en este servicio es donde está todo lo anterior
  }

  /* Constructor para el servicio, con esto inyectamos el servicio que hemos creado, con el segundo, inyecto el servicio de empleado y hacer uso de sus metodos */
  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){
   // Una forma de hacerlo this.empleados = this.empleadosService.empleados;//acudimos al servicio EmpleadosService y llamamos al array empleados
  }
 
  //Otra forma de rellenar el array
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
}
