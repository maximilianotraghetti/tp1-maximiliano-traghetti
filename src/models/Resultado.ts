export class Resultado {
  golesLocal: number;
  golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  public toString(): string {
    return `Resultado: ${this.golesLocal} - ${this.golesVisitante}`;
  }
}
