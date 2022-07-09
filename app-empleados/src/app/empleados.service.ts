import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

//para poder inyectar un servicio dentro de otro
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }

  empleados: Empleado[] = [
    new Empleado("Nagib", "Delgado", "Presidente", 7500),
    new Empleado("Celia", "Bosque", "Vice Presidenta", 5500),
    new Empleado("Nadira", "Delgado", "Asesora", 2500),
    new Empleado("Begoña", "Morales", "Empleada", 1500)
  ];

  agregarEmpleadoServicio(empleado: Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Nombre del usuario a agregar: " + empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice: number){
    let empleado:Empleado=this.empleados[indice];//empleados es mi array de empleados
    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado){
    let empleadoModificado = this.empleados[indice];//almaceno en la variable empleadoModificado el empleado que quiero modificar
    empleadoModificado.nombre = empleado.nombre;//almacenamos en empleadoModificado, el nombre del empleado que llega
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

}
