import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  cuadroNombre: String = "";
  cuadroApellido: String = "";
  cuadroCargo: String = "";
  cuadroSalario: number = 0;
  indice: number; //variable en la que almacenaré el id que me llega desde la url
  constructor(private route: ActivatedRoute,private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }
 
  empleados: Empleado[] = [] //debemos dejar un array vacio para que cuando inyete la info del servicio se almacene en este array
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];//con esto guardo el id que me llega de la url

    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  actualizaEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //Antes de añadir el empleado, quiero hacer uso del servicio que acabamos de crear
   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre); no la neesito porque ya lo he inyectado en el empleados.service.ts
    //this.empleados.push(miEmpleado); lo uso tambien en el servicio
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);//en este servicio es donde está todo lo anterior
    this.router.navigate([""]);//redireccionamiento automatico después de hacer una acción
  }

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }

  public volverHome(){
    this.router.navigate([""]);//cadena vacía, ya que es la ruta para ir al Home
  }
}
