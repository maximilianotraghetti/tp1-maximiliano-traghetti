import { Jugador } from "./Jugador.js";
export class Equipo {
    _jugadores;
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
        this._jugadores = [];
    }
    // Encapsulamiento: getter para la cantidad de jugadores
    get cantidad() {
        return this._jugadores.length;
    }
    agregarJugador(jugador) {
        if (this._jugadores.some((j) => j.id === jugador.id)) {
            console.warn(`❌ El jugador con ID ${jugador.id} ya está en el equipo.`);
            return;
        }
        this._jugadores.push(jugador);
    }
    listarIntegrantes() {
        return this._jugadores.map((j) => j.nombre);
    }
    toString() {
        const nombresJugadores = this.listarIntegrantes().join(", ");
        return `Equipo: ${this.nombre}, Jugadores: [${nombresJugadores}]`;
    }
}
//# sourceMappingURL=Equipo.js.map