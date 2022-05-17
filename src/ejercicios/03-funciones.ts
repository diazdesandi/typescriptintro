/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

// Si no se envia la base es 2 por defecto
function multiplicar(num: number, otronum?: number, base: number = 2): number {
  return num * base;
}

// const resultado = sumar(10, 20);
// const resultado = multiplicar(5, 0, 10);

// console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void; // Declaracion de una funcion
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Strider",
  pv: 50,

  mostrarHp() {
    console.log(`Puntos de vida: ${this.pv}`);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
