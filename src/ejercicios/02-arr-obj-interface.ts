// Arreglos
let habilidades: string[] = ["Bash", "Counter", "Healing"];

// Definir interface
// Serie de llaves para asegurar que un codigo sea como nosotros queramos
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

// Objetos
const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);
