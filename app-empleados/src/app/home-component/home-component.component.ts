import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';
  cuadroNombre: String = "";
  cuadroApellido: String = "";
  cuadroCargo: String = "";
  cuadroSalario: number = 0;

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  empleados: Empleado[] = [] //debemos dejar un array vacio para que cuando inyete la info del servicio se almacene en este array

  /* agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //Antes de añadir el empleado, quiero hacer uso del servicio que acabamos de crear
   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre); no la neesito porque ya lo he inyectado en el empleados.service.ts
    //this.empleados.push(miEmpleado); lo uso tambien en el servicio
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);//en este servicio es donde está todo lo anterior
  }
 */
  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);//Obtenemos un Observable

      this.empleados = Object.values(misEmpleados);//Extraigo los valores del Observable y los meto en un Array, que se almacenará en empleados (Array), y este Array se pasará por parámetro al sericio, para que no machaque los usuarios introducidos
      this.empleadosService.setEmpleados(this.empleados);//Con esto conseguimos que cada vez que se añade un registro, se llama a setEmpleados y se le pasa el Array con los empleados
    });
  }
}
