/*
    ===== Código de TypeScript =====
*/
// Encadenamiento opcional

interface Pasajero {
  nombre: string;
  hijos?: string[]; // No todos los pasajeros tienen hijos
}

const pasajero1: Pasajero = {
  nombre: "Fernando",
};

const pasajero2: Pasajero = {
  nombre: "Melissa",
  hijos: ["Natalia", "Gabriel"],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;
  /* Agregando ? intenta evitar el error si no tiene
  hijos, continuando la función si se tiene alguno.
  Si no se tiene hijos, se asigna un 0 
  */

  console.log(cuantosHijos);
}

// Error con pasajero1 porque no tiene hijos (undefined)
imprimeHijos(pasajero1);
