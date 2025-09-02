import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
export declare class Partido implements IIdentificable {
    readonly id: string;
    private local;
    private visitante;
    private deporte;
    private resultado?;
    constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte);
    jugar(): void;
    toString(): string;
}
//# sourceMappingURL=Partido.d.ts.map