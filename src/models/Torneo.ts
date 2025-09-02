import type { Partido } from "./Partido";

export class Torneo {
  constructor(
    private readonly id: number,
    public nombre: string,
    private listaPartidos: Partido[] = []
  ) {}

  programarPartido(partido: Partido): void {
    this.listaPartidos.push(partido);
  }

  listarPartidos(): Partido[] {
    return this.listaPartidos;
  }

  buscarPartido(partido: Partido): boolean {
    return this.listaPartidos.includes(partido);
  }

  toString(): string {
    return `Torneo ${this.id}: ${this.nombre} - Partidos programados: ${this.listaPartidos.length}`;
  }
}
