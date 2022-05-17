/*
    ===== Código de TypeScript =====
*/
// Decoradores

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}
// Decorador trabaja antes de la definicion de una instancia
// Decorador es una funcion que expande su clase añadiendo funcionalidades especificas

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase);
