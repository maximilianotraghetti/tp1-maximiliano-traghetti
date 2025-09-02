import type { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  private _jugadores: Jugador[];
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
    this._jugadores = [];
  }

  // Encapsulamiento: getter para la cantidad de jugadores
  public get cantidad(): number {
    return this._jugadores.length;
  }

  public agregarJugador(jugador: Jugador): void {
    if (this._jugadores.some((j) => j.id === jugador.id)) {
      console.warn(`❌ El jugador con ID ${jugador.id} ya está en el equipo.`);
      return;
    }
    this._jugadores.push(jugador);
  }

  public listarIntegrantes(): string[] {
    return this._jugadores.map((j) => j.nombre);
  }

  public toString(): string {
    const nombresJugadores = this.listarIntegrantes().join(", ");
    return `Equipo: ${this.nombre}, Jugadores: [${nombresJugadores}]`;
  }
}
