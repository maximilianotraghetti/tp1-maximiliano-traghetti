import type { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";
export declare class Equipo implements ICompetidor {
    private _jugadores;
    nombre: string;
    constructor(nombre: string);
    get cantidad(): number;
    agregarJugador(jugador: Jugador): void;
    listarIntegrantes(): string[];
    toString(): string;
}
//# sourceMappingURL=Equipo.d.ts.map