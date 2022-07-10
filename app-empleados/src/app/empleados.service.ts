import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

//para poder inyectar un servicio dentro de otro
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataService) { }
  empleados:Empleado[]=[];
/*   empleados: Empleado[] = [
    new Empleado("Nagib", "Delgado", "Presidente", 7500),
    new Empleado("Celia", "Bosque", "Vice Presidenta", 5500),
    new Empleado("Nadira", "Delgado", "Asesora", 2500),
    new Empleado("Begoña", "Morales", "Empleada", 1500)
  ]; */

  
  setEmpleados(misEmpleados :Empleado[]){
    this.empleados = misEmpleados;
  }
  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }
  agregarEmpleadoServicio(empleado: Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Nombre del usuario a agregar: " + empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
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

    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice: number){
    this.empleados.splice(indice,1);
  }

}
