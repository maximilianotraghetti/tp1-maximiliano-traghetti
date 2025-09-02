import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
import { Resultado } from "./Resultado.js";
export class Partido {
    id;
    local;
    visitante;
    deporte;
    resultado;
    constructor(id, local, visitante, deporte) {
        if (local.nombre === visitante.nombre) {
            throw new Error("El equipo local y el visitante no pueden ser el mismo.");
        }
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
    }
    jugar() {
        // Validar con polimorfismo, usando el método validar() de la clase específica del deporte
        if (this.deporte.validar(this.local) &&
            this.deporte.validar(this.visitante)) {
            // Simulación de un partido
            const golesLocal = Math.floor(Math.random() * 5);
            const golesVisitante = Math.floor(Math.random() * 5);
            this.resultado = new Resultado(golesLocal, golesVisitante);
            console.log(`✅ Partido jugado: ${this.toString()}`);
        }
        else {
            console.warn(`⚠️ No se puede jugar el partido. Uno o ambos equipos no cumplen con los requisitos del deporte.`);
        }
    }
    toString() {
        const resultadoStr = this.resultado
            ? this.resultado.toString()
            : "Pendiente";
        return `Partido ID ${this.id}: ${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre}) - ${resultadoStr}`;
    }
}
//# sourceMappingURL=Partido.js.map