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
  cargo: String = "";
  entradas: any;

  constructor(){
    this.entradas = [
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"javaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"},
    ];
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }
}
