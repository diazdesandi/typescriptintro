/*
    ===== Código de TypeScript =====
*/

// Clases básicas

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  // Por defecto, las propiedades son públicas
  // /* private */ alterEgo: string; // Solo visible dentro de la clase
  // /* public */ edad: number; // Visible desde cualquier lugar
  // /* static */ nombreReal: string; // Acceder a la propiedad sin crear una instancia de la clase
  // imprimirNombre() {
  //   return this.alterEgo + " " + this.nombreReal;
  // }
  // constructor(alterEgo: string, edad: number) {
  //   this.alterEgo = alterEgo;
  //   this.edad = edad;
  // }

  // Declarando la clase utilizando solo el constructor
  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ) {
    super(nombreReal, "New York, USA");
  }
}

/* 
  Interfaces no existen en JavaScript
  Clases sirven para crear instancias
  En una interfaz no puedo definir la implementacion de un metodo
  Interfaces son como clases tontas
  */

// interface Personaje2 {
//   alterEgo?: string;
//   edad?: number;
//   nombreReal?: number;
// }

const ironman = new Heroe("Ironman", 45, "Tony");
// const spiderman: Personaje2 = {};

console.log(ironman);
