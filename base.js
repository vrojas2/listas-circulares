export default class Base {
    constructor(objBase) {
        this._nombre = objBase.nombre;
        this._minutos = objBase.minutos;
        this._siguiente = null;
        this._anterior = null;
    }
    get nombre() {
        return this._nombre;
    }

    set nombre(newNombre) {
        this._nombre = newNombre;
    }

    get minutos() {
        return this._minutos;
    }

    set minutos(newMinutos) {
        this._minutos = newMinutos;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(newSiguiente) {
        this._siguiente = newSiguiente;
    }
    
    get anterior() {
        return this._anterior;
    }
    
    set anterior(newAnterior) {
        this._anterior = newAnterior;
    }
}