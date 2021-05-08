export class HelloWorld {
    // Atributos de la clase
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    // metodos
    greet() {
        return `Hola mundo con ${this.nombre}`;
    }
}