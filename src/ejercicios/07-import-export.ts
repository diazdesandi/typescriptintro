import { Producto, calculaISV } from "./06-desestructuracion-funcion";
/*
      ===== Código de TypeScript =====
  */

// Importaciones y exportaciones

const carritoCompras: Producto[] = [
  {
    desc: "Telefono 1",
    precio: 100,
  },
  {
    desc: "Telefono 2",
    precio: 150,
  },
];

const [total, isv] = calculaISV(carritoCompras);

console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);
// Al momento de importar va a realizar todo lo que se encuentra en el otro modulo.
