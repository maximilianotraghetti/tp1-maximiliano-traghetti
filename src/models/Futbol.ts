import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";

export class Futbol extends Deporte {
  constructor() {
    super("Fútbol", 11);
  }

  public validar(equipo: Equipo): boolean {
    const esValido =
      equipo.cantidad <= this.maxPorEquipo && equipo.cantidad > 0;
    if (!esValido) {
      console.warn(
        `❌ El equipo de fútbol ${equipo.nombre} no es válido. Máximo ${this.maxPorEquipo} jugadores, tiene ${equipo.cantidad}.`
      );
    }
    return esValido;
  }
}
