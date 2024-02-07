"use strict";
console.log("hola mundo");
let nombre = "luis";
let edad = 5;
let indefinido = undefined;
let apellido = 40;
apellido = "gonzales";
console.log("mi nombre es " + nombre);
const edades = [3, 10, 20, 30, 45, 3];
const nombres = ["pepe", "juan", "lucas"];
const persona1 = {
    nombre: "pepe",
    edad: 90,
};
const persona2 = {
    nombre: "pepito",
    edad: 90,
};
const personas = [persona1, persona2, { nombre: "luis", edad: 30 }];
console.log(personas[2]);
const saludar = (nombre) => {
    console.log("hola buen dia " + nombre);
};
saludar("pepito");
class Empleado {
    constructor(nombre, salarioBase, puesto, antiguedad) {
        (this.nombre = nombre),
            (this.salarioBase = salarioBase),
            (this.puesto = puesto),
            (this.antiguedad = antiguedad);
        this.trabajosAsignados = [];
        this.estaVivo = true;
    }
    asignarTrabajo(trabajo) {
        this.trabajosAsignados.push(trabajo);
    }
}
///
class Desarrollador extends Empleado {
    constructor(nombre, salarioBase, puesto, antiguedad) {
        super(nombre, salarioBase, puesto, antiguedad);
    }
    trabajar(horas) {
        console.log(this.nombre + " hace tiki tiki tiki por " + horas + " horas ");
    }
}
class Diseñadora extends Empleado {
    constructor(nombre, salarioBase, antiguedad, herramientaFavorita) {
        super(nombre, salarioBase, "Diseñadora", antiguedad);
        this.herramientaFavorita = herramientaFavorita;
    }
    diseñar(horas, motivacion) {
        if (motivacion > 50) {
            console.log(this.nombre + " hace tiki tiki tiki en figma por " + horas + " horas ");
        }
        else {
            console.log(this.nombre +
                " hace tiki tiki tiki en figma por " +
                horas / 2 +
                " horas ");
        }
    }
}
class ProjectManager extends Empleado {
    constructor(nombre, salarioBase, antiguedad) {
        super(nombre, salarioBase, "Project Manager", antiguedad);
        this.equipo = [];
    }
    asignarTareaAEmpleado(tarea, empleado) {
        empleado.asignarTrabajo(tarea);
    }
    agregarAlEquipo(empleado) {
        this.equipo.push(empleado);
    }
}
// Ejemplo de uso:
const pm = new ProjectManager("Ana", 80000, 5);
const desarrollador = new Desarrollador("Juan", 60000, "Desarrollador", 2);
pm.agregarAlEquipo(desarrollador);
const tarea1 = {
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
    constructor(nombre, salarioBase, puesto, antiguedad) {
        super(nombre, salarioBase, puesto, antiguedad);
    }
    asignarTareaAEmpleado(trabajo, empleado) {
        empleado.asignarTrabajo(trabajo);
    }
}
const rodolfo = new ProManager("rodolfo", 320000, "project manager", 2);
rodolfo.asignarTareaAEmpleado({ duracion: 50, nombre: "Diseñar el login y prototipar" }, samantha);
