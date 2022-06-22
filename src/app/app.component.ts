import { Component } from '@angular/core';

@Component({//decorador 
  selector: 'app-root',//nombre que usará el html para cargarlo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//clase
  title = 'miPrimeraApp';
  saludo = 'Hola alumnos de Angular. Qué tal estáis';
}
