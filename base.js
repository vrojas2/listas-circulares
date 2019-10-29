export default class Base {
    constructor(base) {
        this._nombre = base.nombre;
        this._minutos = base.minutos;
        this._siguiente = null;
        this._anterior = null;
    }

    get nombre() {
        return this._nombre;
    }

    get minutos() {
        return this._minutos;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(valor) {
        this._siguiente = valor;
    }

    get anterior(){
        return this._anterior;
    }

    set anterior(valor) {
        this._anterior = valor;
    }

    toString() {
        return `Nombre: ${this._nombre}, Minutos: ${this._minutos}`;
    }
}