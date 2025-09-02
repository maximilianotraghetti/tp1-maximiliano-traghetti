import type { IIdentificable } from "../interfaces/IIdentificable.js";

export class Jugador implements IIdentificable {
  readonly id: string;
  nombre: string;
  edad: number;
  posicion?: string | undefined;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  public toString(): string {
    const posicionStr = this.posicion ? ` (${this.posicion})` : "";
    return `Jugador: ${this.nombre}${posicionStr}, Edad: ${this.edad}, ID: ${this.id}`;
  }
}
