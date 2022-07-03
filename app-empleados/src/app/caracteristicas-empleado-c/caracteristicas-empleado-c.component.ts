import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) { } //No es necesario, porque en mi servicio empleado.service.ts, he inyectado el servicio de muestra mensaje

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string){
// No es necesario, porque en mi servicio empleado.service.ts, he inyectado el servicio de muestra mensaje ESTO SOBRA
  //  En este caso al servicio le pasamos value, porque es la "caracteristica" que recibe el método
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value); 
  }
}
