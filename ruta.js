export default class Ruta {
    constructor() {
        this._inicio = null;
        this._bandera = false;
    }
    insertarBase(base) {
        if (!this._inicio) {
            this._inicio = base;
            this._bandera = true;
            return;
        } else {
            if (this._bandera = true) {
                let temp = this._inicio;
                while (temp.siguiente) {
                    temp = temp.siguiente;
                }
                base.anterior = temp;
                temp.siguiente = base;
                base.siguiente = this._inicio;
                console.log(this._inicio);
                this._bandera = false;
                return;
            } else {
                while (temp.siguiente != this._inicio) {
                    temp = temp.siguiente
                }
                base.siguiente = this._inicio;
                base.anterior = temp;
                temp.siguiente = base;
                console.log(this._inicio);
                return;
            }

        }

    }
}