import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
export class Futbol extends Deporte {
  constructor(
    public readonly nombre: string = "Fútbol",
    public readonly maxPorEquipo: number = 11
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
