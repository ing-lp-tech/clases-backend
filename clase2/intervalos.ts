/* console.log("hola mundo")

const numeros=[8,19,30,80,72,98,10,40]

const arr :string [] = ["pepe"] */

/* const numeros = [8, 19, 30, 80, 72, 90, 10, 40]; */

//Crea una funcion que se llame filtrarPorIntervalos(inicio, fin)

//Esta funcion va a devolver un array con todos los numeros que esten dentro del intervalo

//ej: filtrarPorIntervalos(70, 85) => [80, 72]

//LOS METODOS AVANZADOS TAMBIEN TIENEN TIPADO EN SUS CALLBACKS

/* const arr : string[] = ['pepe', 'juan']

 

arr.map((nombre: string) : string =>{

    return nombre + 'a'

}) */
/* 
const filtrarPorIntervalo = (
  numeros: number[],
  start: number,
  end: number
): number[] => {
  return numeros.filter((num: number): boolean => num > start && num < end);
};

const resultado: number[] = filtrarPorIntervalo(numeros, 70, 85);

console.log(resultado);

///////

class Usuario {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar(nombre: string): void {
    console.log("hola " + nombre + ", buen dia!");
  }
}

const usuario1 = new Usuario("pepe");

usuario1.saludar("pepe"); */

/* Definir una clase llamada Empleado con los atributos, salarioBase, puesto, nombre, antiguedad*/

/* interface Trabajo {
  duracion: number;
  nombre: string;
} */

/* class Empleado {
  salarioBase: number;
  puesto: string;
  nombre: string;
  antiguedad: number;
  tareasAsignadas: Trabajo[];
  constructor(
    salarioBase: number,
    puesto: string,
    nombre: string,
    antiguedad: number
  ) {
    this.salarioBase = salarioBase;
    this.puesto = puesto;
    this.nombre = nombre;
    this.antiguedad = antiguedad;
    this.tareasAsignadas = [];
  }

  asignarTarea(trabajo: Trabajo): void {
    this.tareasAsignadas.push(trabajo);
  }
}

const tarea1: Trabajo = {
  duracion: 3,
  nombre: "Dormir",
};

const empleado1: Empleado = new Empleado(700000, "ingeniero", "Luis", 2);
empleado1.asignarTarea(tarea1);

console.log(empleado1); */
