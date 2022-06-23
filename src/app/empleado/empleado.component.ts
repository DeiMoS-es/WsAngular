import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html', 
  //template: "<p>Aqui iría un empleado</p>", template inline
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red}"]  styles inline
})
export class EmpleadoComponent implements OnInit {

  nombre="Nagib";
  apellido="Delgado";
  edad=28;
  //empresa="nagib.S.A";

 /*  getEdad(){
    return this.edad;
  } */

  /* Función para utilizar en el archivo HTML
  llamaEmpresa(value:String){} 
  */

  habilitacionCuadro = true;
  usuRegistrado=true;

  getRegistroUsuario(){
    this.usuRegistrado = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
