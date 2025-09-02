import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Partido } from "./Partido.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";

export class Torneo implements IIdentificable {
  readonly id: string;
  nombre: string;
  private _partidos: Partido[];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this._partidos = [];
  }

  public programarPartido(
    id: string,
    local: Equipo,
    visitante: Equipo,
    deporte: Deporte
  ): Partido | null {
    try {
      const nuevoPartido = new Partido(id, local, visitante, deporte);
      this._partidos.push(nuevoPartido);
      console.log(`✅ Partido programado: ${nuevoPartido.toString()}`);
      return nuevoPartido;
    } catch (error) {
      console.error(
        `❌ Error al programar el partido: ${
          error instanceof Error ? error.message : "Error desconocido"
        }`
      );
      return null;
    }
  }

  public listarPartidos(): string[] {
    return this._partidos.map((p) => p.toString());
  }

  public buscarPartido(id: string): Partido | undefined {
    return this._partidos.find((p) => p.id === id);
  }
}
