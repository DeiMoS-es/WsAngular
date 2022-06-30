import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: String = 'Registro Usuario';
  mensaje: String ="";
  registrado = false;
  nombre: String="";
  apellido: String="";

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }
}
