import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Partido } from "./Partido.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
export declare class Torneo implements IIdentificable {
    readonly id: string;
    nombre: string;
    private _partidos;
    constructor(id: string, nombre: string);
    programarPartido(id: string, local: Equipo, visitante: Equipo, deporte: Deporte): Partido | null;
    listarPartidos(): string[];
    buscarPartido(id: string): Partido | undefined;
}
//# sourceMappingURL=Torneo.d.ts.map