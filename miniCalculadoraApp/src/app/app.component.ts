import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  // creo variables de clase
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //creo metodos
  sumar():void{
    //con this, especifico que resultado corresponde a esta clase
    this.resultado = this.numero1 + this.numero2;
  }

  restar():void{
    //con this, especifico que resultado corresponde a esta clase
    this.resultado = this.numero1 - this.numero2;
  }
}
