export class HelloWorld {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // metodos
    greet() {
        return `Hola mundo con ${this.nombre}`;
    }
}