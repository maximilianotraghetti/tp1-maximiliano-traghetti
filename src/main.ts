import { Jugador } from "./models/Jugador.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Torneo } from "./models/Torneo.js";

// --- Instancias de deportes y torneo ---
const torneo = new Torneo("T1", "Copa de Campeones");
const futbol = new Futbol(); // Demostración de polimorfismo con validar()
const basquet = new Basquet();

// --- Creación de equipos de fútbol ---
const equipoFutbol1 = new Equipo("Barcelona");
const equipoFutbol2 = new Equipo("Real Madrid");

const jugadoresFutbol1 = [
  new Jugador("J1", "Lionel Messi", 38, "Delantero"),
  new Jugador("J2", "Robert Lewandowski", 35, "Delantero"),
  new Jugador("J3", "Sergio Busquets", 36, "Mediocampista"),
  new Jugador("J4", "Gerard Piqué", 37, "Defensa"),
  new Jugador("J5", "Marc-André ter Stegen", 32, "Portero"),
  new Jugador("J6", "Ansu Fati", 22, "Delantero"),
  new Jugador("J7", "Pedri", 22, "Mediocampista"),
  new Jugador("J8", "Gavi", 21, "Mediocampista"),
  new Jugador("J9", "Jules Koundé", 26, "Defensa"),
  new Jugador("J10", "Ousmane Dembélé", 28, "Delantero"),
  new Jugador("J11", "Frenkie de Jong", 28, "Mediocampista"),
];
jugadoresFutbol1.forEach((j) => equipoFutbol1.agregarJugador(j));

const jugadoresFutbol2 = [
  new Jugador("J12", "Karim Benzema", 37, "Delantero"),
  new Jugador("J13", "Luka Modric", 39, "Mediocampista"),
  new Jugador("J14", "Vinícius Júnior", 25, "Delantero"),
  new Jugador("J15", "Thibaut Courtois", 32, "Portero"),
  new Jugador("J16", "Toni Kroos", 35, "Mediocampista"),
];
jugadoresFutbol2.forEach((j) => equipoFutbol2.agregarJugador(j));

// --- Creación de equipos de básquet ---
const equipoBasquet1 = new Equipo("Los Angeles Lakers");
const equipoBasquet2 = new Equipo("Boston Celtics");

const jugadoresBasquet1 = [
  new Jugador("J17", "LeBron James", 40),
  new Jugador("J18", "Anthony Davis", 32),
  new Jugador("J19", "Russell Westbrook", 36),
  new Jugador("J20", "Austin Reaves", 27),
  new Jugador("J21", "D’Angelo Russell", 29),
];
jugadoresBasquet1.forEach((j) => equipoBasquet1.agregarJugador(j));

const jugadoresBasquet2 = [
  new Jugador("J22", "Jayson Tatum", 27),
  new Jugador("J23", "Jaylen Brown", 28),
  new Jugador("J24", "Kristaps Porziņģis", 29),
  new Jugador("J25", "Jrue Holiday", 34),
  new Jugador("J26", "Derrick White", 30),
];
jugadoresBasquet2.forEach((j) => equipoBasquet2.agregarJugador(j));

// --- Pruebas de partidos y polimorfismo ---
console.log("--- Programando y jugando partidos ---");

// Partido de fútbol válido
const partidoFutbol = torneo.programarPartido(
  "P1",
  equipoFutbol1,
  equipoFutbol2,
  futbol
);
if (partidoFutbol) {
  partidoFutbol.jugar(); // Valida con el método validar() de la clase Futbol
  console.log(`\n${partidoFutbol.toString()}`);
}

// Partido de básquet válido
const partidoBasquet = torneo.programarPartido(
  "P2",
  equipoBasquet1,
  equipoBasquet2,
  basquet
);
if (partidoBasquet) {
  partidoBasquet.jugar(); // Valida con el método validar() de la clase Basquet
  console.log(`\n${partidoBasquet.toString()}`);
}

// --- Escenario de validación de cupos (Polimorfismo en acción) ---
console.log("\n--- Demostración de validación de cupos por deporte ---");

const equipoInvalidoFutbol = new Equipo("Equipo Faltante");
equipoInvalidoFutbol.agregarJugador(new Jugador("J27", "Jugador X", 25)); // Solo 1 jugador
const partidoInvalidoFutbol = torneo.programarPartido(
  "P3",
  equipoInvalidoFutbol,
  equipoFutbol2,
  futbol
);
if (partidoInvalidoFutbol) {
  partidoInvalidoFutbol.jugar(); // Fallará la validación
}

const equipoInvalidoBasquet = new Equipo("Equipo Excedido");
for (let i = 0; i < 6; i++) {
  equipoInvalidoBasquet.agregarJugador(
    new Jugador(`B${i}`, `Jugador B${i}`, 20)
  );
}
const partidoInvalidoBasquet = torneo.programarPartido(
  "P4",
  equipoInvalidoBasquet,
  equipoBasquet1,
  basquet
);
if (partidoInvalidoBasquet) {
  partidoInvalidoBasquet.jugar(); // Fallará la validación
}

// --- Demostración de no-partido entre el mismo equipo ---
console.log("\n--- Demostración de no-partido entre el mismo equipo ---");
torneo.programarPartido("P5", equipoFutbol1, equipoFutbol1, futbol); // Esto lanzará un error

// --- Listado final de partidos ---
console.log("\n--- Lista de todos los partidos programados ---");
torneo.listarPartidos().forEach((p) => console.log(p));
