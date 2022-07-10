import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  cargarEmpleados(){
    return this.httpClient.get("https://mis-clientes-d83cc-default-rtdb.europe-west1.firebasedatabase.app/datos.json");
  }

  guardarEmpleados(empleados: Empleado[]){
    this.httpClient.put('https://mis-clientes-d83cc-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados)
    .subscribe(response=>console.log("Empleados guardados: "+response), 
               error=>console.log("Error: " + error)
               );
  }

  actualizarEmpleado(indice: number, empleado: Empleado){
      let url = "https://mis-clientes-d83cc-default-rtdb.europe-west1.firebasedatabase.app/datos/" + indice + ".json";
      this.httpClient.put(url, empleado).subscribe(
                 response=>console.log("Se ha modificado correctamente el empleado: " + response), 
                 error=>console.log("Error: " + error)
                 );
  }
}
