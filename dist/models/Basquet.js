import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";
export class Basquet extends Deporte {
    constructor() {
        super("Básquet", 5);
    }
    validar(equipo) {
        const esValido = equipo.cantidad <= this.maxPorEquipo && equipo.cantidad > 0;
        if (!esValido) {
            console.warn(`❌ El equipo de básquet ${equipo.nombre} no es válido. Máximo ${this.maxPorEquipo} jugadores, tiene ${equipo.cantidad}.`);
        }
        return esValido;
    }
}
//# sourceMappingURL=Basquet.js.map