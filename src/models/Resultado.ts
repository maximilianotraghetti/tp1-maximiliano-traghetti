export class Resultado {
  constructor(public golesLocal: number, public golesVisitante: number) {}

  toString(): string {
    return `Resultado: Local ${this.golesLocal} - Visitante ${this.golesVisitante}`;
  }
}
