import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { Futbol } from "./models/Futbol";
import { Torneo } from "./models/Torneo";

console.log("Creación de jugadores:");

const jugador1 = new Jugador(1, "Lionel Messi", "Delantero");
const jugador2 = new Jugador(2, "Cristiano Ronaldo", "Delantero");

console.log(jugador1.toString());
console.log(jugador2.toString());

const equipoA = new Equipo("Equipo A");
equipoA.agregarIntegrante(jugador1);
equipoA.agregarIntegrante(jugador2);
equipoA.agregarIntegrante(new Jugador(5, "Luka Modrić", "Centrocampista"));
equipoA.agregarIntegrante(new Jugador(6, "Sergio Ramos", "Defensor"));
equipoA.agregarIntegrante(new Jugador(7, "Manuel Neuer", "Portero"));
equipoA.agregarIntegrante(new Jugador(8, "Kevin De Bruyne", "Centrocampista"));
equipoA.agregarIntegrante(new Jugador(9, "Virgil van Dijk", "Defensor"));
equipoA.agregarIntegrante(new Jugador(10, "Robert Lewandowski", "Delantero"));
equipoA.agregarIntegrante(new Jugador(11, "Kylian Mbappé", "Delantero"));
equipoA.agregarIntegrante(new Jugador(12, "Neymar Jr", "Delantero"));
equipoA.agregarIntegrante(new Jugador(13, "Sadio Mané", "Delantero"));

console.log("Creación de equipos:");
console.log(equipoA.toString());
console.log(`Cantidad de integrantes: ${equipoA.cantidadIntegrantes}`);

const equipoB = new Equipo("Equipo B");
equipoB.agregarIntegrante(new Jugador(3, "Neymar Jr", "Delantero"));
equipoB.agregarIntegrante(new Jugador(4, "Kylian Mbappé", "Delantero"));
equipoB.agregarIntegrante(new Jugador(14, "Luka Modrić", "Centrocampista"));
equipoB.agregarIntegrante(new Jugador(15, "Sergio Ramos", "Defensor"));
equipoB.agregarIntegrante(new Jugador(16, "Manuel Neuer", "Portero"));
equipoB.agregarIntegrante(new Jugador(17, "Kevin De Bruyne", "Centrocampista"));
equipoB.agregarIntegrante(new Jugador(18, "Virgil van Dijk", "Defensor"));
equipoB.agregarIntegrante(new Jugador(19, "Robert Lewandowski", "Delantero"));
equipoB.agregarIntegrante(new Jugador(20, "Kylian Mbappé", "Delantero"));
equipoB.agregarIntegrante(new Jugador(21, "Neymar Jr", "Delantero"));
equipoB.agregarIntegrante(new Jugador(22, "Sadio Mané", "Delantero"));

console.log(equipoB.toString());
console.log(`Cantidad de integrantes: ${equipoB.cantidadIntegrantes}`);

const futbol = new Futbol();
const basquet = new Basquet();

console.log("Partido de Fútbol:");
const partidoFutbol = new Partido(1, equipoA, equipoB, futbol);
partidoFutbol.jugar();
console.log(partidoFutbol.toString());

const equipoC = new Equipo("Equipo C");
equipoC.agregarIntegrante(new Jugador(23, "LeBron James", "Alero"));
equipoC.agregarIntegrante(new Jugador(24, "Stephen Curry", "Base"));
equipoC.agregarIntegrante(new Jugador(25, "Kevin Durant", "Ala-pívot"));
equipoC.agregarIntegrante(
  new Jugador(26, "Giannis Antetokounmpo", "Ala-pívot")
);
equipoC.agregarIntegrante(new Jugador(27, "Kawhi Leonard", "Alero"));

const equipoD = new Equipo("Equipo D");
equipoD.agregarIntegrante(new Jugador(28, "James Harden", "Escolta"));
equipoD.agregarIntegrante(new Jugador(29, "Anthony Davis", "Pívot"));
equipoD.agregarIntegrante(new Jugador(30, "Damian Lillard", "Base"));
equipoD.agregarIntegrante(new Jugador(31, "Chris Paul", "Base"));
equipoD.agregarIntegrante(new Jugador(32, "Jimmy Butler", "Alero"));

console.log("Partido de Básquet:");
const partidoBasquet = new Partido(2, equipoC, equipoD, basquet);
partidoBasquet.jugar();
console.log(partidoBasquet.toString());

const torneo = new Torneo(1, "Torneo Internacional");
torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

console.log("-----------------------------------------------------------");

console.log("Lista de partidos del Torneo:");
console.log(torneo.listarPartidos());
console.log(`¿El partido ${partidoFutbol} de fútbol está en el torneo?`);
console.log(torneo.buscarPartido(partidoFutbol));

console.log("Validación de equipos para Fútbol:");
console.log(`¿Equipo A es válido? ${futbol.validar(equipoA)}`);
console.log(`¿Equipo B es válido? ${futbol.validar(equipoC)}`);
console.log("Validación de equipos para Básquet:");
console.log(`¿Equipo A es válido? ${basquet.validar(equipoA)}`);
console.log(`¿Equipo B es válido? ${basquet.validar(equipoC)}`);
