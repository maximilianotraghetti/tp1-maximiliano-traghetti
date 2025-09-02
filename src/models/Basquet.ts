import { Equipo } from "./Equipo.ts";
import { Deporte } from "./Deporte.ts";
export class Basquet extends Deporte {
  constructor(
    public readonly nombre: string = "Básquet",
    public readonly maxPorEquipo: number = 5
  ) {
    super(nombre, maxPorEquipo);
  }

  validar(equipo: Equipo): boolean {
    const jugadores = equipo.listarIntegrantes();
    if (jugadores.length !== this.maxPorEquipo) {
      return false;
    }
    return true;
  }
}
