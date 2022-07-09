import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) { }

  guardarEmpleados(empleados: Empleado[]){
    this.HttpClient.post("https://mis-clientes-d83cc-default-rtdb.europe-west1.firebasedatabase.app/datos.json", empleados)
    .subscribe(response=>console.log("Empleados guardados: "+response), 
               error=>console.log("Error: " + error)
               );
  }
}
