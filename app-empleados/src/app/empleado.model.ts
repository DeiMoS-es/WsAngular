export class Empleado{

    nombre: String = "";
    apellido: String = "";
    cargo: String = "";
    salario: number = 0;

    /* Constructor */
    constructor(nombre: String, apellido: String, cargo: String, salario: number){
        this.nombre=nombre; /* This lo utilizamos en POO para referirnos a atributos o métodos propios de la clase*/
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }
}