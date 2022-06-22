import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html', 
  //template: "<p>Aqui iría un empleado</p>", template inline
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red}"]  styles inline
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
