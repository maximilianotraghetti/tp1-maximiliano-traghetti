export class Jugador {
    id;
    nombre;
    edad;
    posicion;
    constructor(id, nombre, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
    toString() {
        const posicionStr = this.posicion ? ` (${this.posicion})` : "";
        return `Jugador: ${this.nombre}${posicionStr}, Edad: ${this.edad}, ID: ${this.id}`;
    }
}
//# sourceMappingURL=Jugador.js.map