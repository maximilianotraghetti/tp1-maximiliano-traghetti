import { Equipo } from "./Equipo.js";
export declare abstract class Deporte {
    nombre: string;
    maxPorEquipo: number;
    constructor(nombre: string, maxPorEquipo: number);
    abstract validar(equipo: Equipo): boolean;
}
//# sourceMappingURL=Deporte.d.ts.map