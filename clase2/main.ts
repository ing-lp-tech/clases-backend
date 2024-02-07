console.log("hola mundo");

let nombre: string = "luis";

let edad: number = 5;
let indefinido: undefined = undefined;
let apellido: any = 40;
apellido = "gonzales";
console.log("mi nombre es " + nombre);

const edades: number[] = [3, 10, 20, 30, 45, 3];
const nombres: string[] = ["pepe", "juan", "lucas"];

interface Persona {
  nombre: string;
  edad: number;
}

const persona1: Persona = {
  nombre: "pepe",
  edad: 90,
};

const persona2: Persona = {
  nombre: "pepito",
  edad: 90,
};

const personas: Persona[] = [persona1, persona2, { nombre: "luis", edad: 30 }];

console.log(personas[2]);

const saludar = (nombre: string): void => {
  console.log("hola buen dia " + nombre);
};

saludar("pepito");

///////

/* interface Trabajo {
  duracion: number;
  nombre: string;
}

class Empleado {
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

interface Trabajo {
  nombre: string;
  duracion: number;
}

class Empleado {
  nombre: string;
  salarioBase: number;
  puesto: string;
  antiguedad: number;
  trabajosAsignados: Trabajo[];
  estaVivo: boolean;

  constructor(
    nombre: string,
    salarioBase: number,
    puesto: string,
    antiguedad: number
  ) {
    (this.nombre = nombre),
      (this.salarioBase = salarioBase),
      (this.puesto = puesto),
      (this.antiguedad = antiguedad);

    this.trabajosAsignados = [];

    this.estaVivo = true;
  }

  asignarTrabajo(trabajo: Trabajo): void {
    this.trabajosAsignados.push(trabajo);
  }
}

///

class Desarrollador extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    puesto: string,
    antiguedad: number
  ) {
    super(nombre, salarioBase, puesto, antiguedad);
  }

  trabajar(horas: number): void {
    console.log(this.nombre + " hace tiki tiki tiki por " + horas + " horas ");
  }
}

class Diseñadora extends Empleado {
  herramientaFavorita: string;

  constructor(
    nombre: string,
    salarioBase: number,
    antiguedad: number,
    herramientaFavorita: string
  ) {
    super(nombre, salarioBase, "Diseñadora", antiguedad);

    this.herramientaFavorita = herramientaFavorita;
  }

  diseñar(horas: number, motivacion: number): void {
    if (motivacion > 50) {
      console.log(
        this.nombre + " hace tiki tiki tiki en figma por " + horas + " horas "
      );
    } else {
      console.log(
        this.nombre +
          " hace tiki tiki tiki en figma por " +
          horas / 2 +
          " horas "
      );
    }
  }
}

class ProjectManager extends Empleado {
  equipo: Empleado[];

  constructor(nombre: string, salarioBase: number, antiguedad: number) {
    super(nombre, salarioBase, "Project Manager", antiguedad);
    this.equipo = [];
  }

  asignarTareaAEmpleado(tarea: Trabajo, empleado: Empleado): void {
    empleado.asignarTrabajo(tarea);
  }

  agregarAlEquipo(empleado: Empleado): void {
    this.equipo.push(empleado);
  }
}

// Ejemplo de uso:
const pm = new ProjectManager("Ana", 80000, 5);
const desarrollador = new Desarrollador("Juan", 60000, "Desarrollador", 2);

pm.agregarAlEquipo(desarrollador);

const tarea1: Trabajo = {
  nombre: "Desarrollar la función X",
  duracion: 40,
};

pm.asignarTareaAEmpleado(tarea1, desarrollador);

/* Vamos a crear una nueva class llamada project manager que provenga de Empleado

Esta clase va a tener los metodos asignarTareaAEmpleado (recibe una tarea y un empleado )

y usaremos el metodo de class empleado para asignarle una tarea a este empleado

a proyectManager agrgerle una propiedad llamada equipo que tenga el tipo empleado array e inicialize comoa array vacio.

Luego crear el metodo agregarAlEquipo (empleado) y lo agrega al array equipo
  
*/

class ProManager extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    puesto: string,
    antiguedad: number
  ) {
    super(nombre, salarioBase, puesto, antiguedad);
  }

  asignarTareaAEmpleado(trabajo: Trabajo, empleado: Empleado): void {
    empleado.asignarTrabajo(trabajo);
  }
}

const rodolfo = new ProManager("rodolfo", 320000, "project manager", 2);

rodolfo.asignarTareaAEmpleado(
  { duracion: 50, nombre: "Diseñar el login y prototipar" },
  samantha
);
