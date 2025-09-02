import { Partido } from "./Partido.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
export class Torneo {
    id;
    nombre;
    _partidos;
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this._partidos = [];
    }
    programarPartido(id, local, visitante, deporte) {
        try {
            const nuevoPartido = new Partido(id, local, visitante, deporte);
            this._partidos.push(nuevoPartido);
            console.log(`✅ Partido programado: ${nuevoPartido.toString()}`);
            return nuevoPartido;
        }
        catch (error) {
            console.error(`❌ Error al programar el partido: ${error instanceof Error ? error.message : "Error desconocido"}`);
            return null;
        }
    }
    listarPartidos() {
        return this._partidos.map((p) => p.toString());
    }
    buscarPartido(id) {
        return this._partidos.find((p) => p.id === id);
    }
}
//# sourceMappingURL=Torneo.js.map