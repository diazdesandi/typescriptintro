/*
    ===== Código de TypeScript =====
*/

// Destructuración de objetos

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

// Destructurar objeto
const {
  volumen,
  segundo,
  cancion,
  detalles,
  //   detalles: { autor: autorDetalle },
} = reproductor;
const { autor } = detalles;
// const {
//   detalles: { autor },
// } = reproductor;

// console.log(`El volumen actual es: ${volumen}`);
// console.log(`El segundo actual es: ${segundo}`);
// console.log(`La canción actual es: ${cancion}`);
// console.log(`El autor es: ${autor}`);

// Destructuración de arreglos

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

// Destructurar arreglo
// const [p1, p2, p3] = dbz;
// Para obtener de una sola posición
const [, , p3] = dbz;

// console.log(`Personaje 1: ${p1} \nPersonaje 2: ${p2} \nPersonaje 3: ${p3}`);

// console.log(`Personaje 1: ${p1}`);
// console.log(`Personaje 2: ${p2}`);
console.log(`Personaje 3: ${p3}`);
