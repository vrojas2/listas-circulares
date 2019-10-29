export default class Ruta {
    constructor() {
        this._inicio = null;
        this._ultimo = null;
        this.tamaño = 0;
        this._baseString = "";
    }

    get baseString() {
        return this._baseString;
    }

    imprimir() {
        this._baseString = "";
        if (this._inicio != this._inicio) {
            this._baseString += this._inicio.toString() + " <br> ";
            this.obterBaseString(this._inicio.siguiente);
        }
    }

    agregarProducto(base) {
        let actual = this._ultimo;
        console.log(base);
        if (this._inicio == null) {
            this._inicio = base;
            this._ultimo = base;
        }
        else {
            actual.siguiente = base;
            base.siguiente = this._inicio;
            base.anterior = actual;
            this._ultimo = base;
        }
        this.tamaño++;
        console.log(this.tamaño);
    }

    obterBaseString(inicio) {
        if(inicio != this._inicio){
            this._baseString += inicio.toString() + "<br>";
            this.obterBaseString(inicio.siguiente)
        }
    }

}

let r = new Ruta();
console.log(r.agregarProducto());
