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
  empresa="Google";



 /*  getEdad(){
    return this.edad;
  } */

  /* Función para utilizar en el archivo HTML
  llamaEmpresa(value:String){} 
  */

  habilitacionCuadro = false;
  usuRegistrado=true;

  textoRegistro ="No hay nadie registrado";

  /* Binding */
  getRegistroUsuario(){
    this.usuRegistrado = false;
  }
  /* event binding */
  setUsuarioRegistrado(event: Event){//le pasamos por parametro al propiedad value
    //alert("El usuario se ha registrado");
    //this.textoRegistro = "El usuario se acaba de registrar"
    if((<HTMLInputElement> event.target).value=="Si"){//casting a html, antes de accerder a la propiedad value, hay que hacer un casting
      this.textoRegistro="El usuarios se acaba de registrar";
  }else{
    this.textoRegistro="No hay nadie registrado";
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
