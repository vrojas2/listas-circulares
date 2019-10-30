export default class Ruta {
    constructor() {
        this._inicio = null;
        this._tamaño = 0;
        this._baseString = "";
    }

    get baseString() {
        return this._baseString;
    }

    agregarProducto(base) {
        if (this._inicio === null) {
            this._inicio = base;
            this._inicio.siguiente = this._inicio;
            this._inicio.anterior = this._inicio;
            this._tamaño++;
        } else if (this._inicio.siguiente == this._inicio)  {
            this._inicio.siguiente = base;
            this._inicio.anterior = base;
            base.siguiente = this._inicio;
            base.anterior = this._inicio;
            this._tamaño++;
        } else {
            this.insertarAntesInicio(base, this._inicio);
            this._tamaño++;
        }
    }

    insertarAntesInicio(base, primeraBase) {
        base.anterior = primeraBase.anterior;
        base.siguiente = primeraBase;
        primeraBase.anterior.siguiente = base;
        primeraBase.anterior = base;
    }

    imprimir() {
        this._baseString = "";
        if (this._inicio != null) {
            this._baseString += this._inicio.toString() + " <br> ";
            this.obterBaseString(this._inicio.siguiente);
        }
    }
    
    obterBaseString(inicio) {
        if (inicio != this._inicio) {
            this._baseString += inicio.toString() + "<br>";
            this.obterBaseString(inicio.siguiente);
            console.log(this._baseString);  
        }
    }

    buscarConsulta(nombre) {
        if (this._inicio.nombre == nombre) {
            return this._inicio.toString();
        } else {
            let base = this.buscarBasesRegistradas(nombre, this._inicio.siguiente);
            if (base == null) {
                return "No encontrado";
            } else {
                return base.toString();
            }
        }
    }

    buscarBasesRegistradas(nombre, inicio) {
        while (inicio != this._inicio) {
            if (inicio.nombre == nombre) {
                return inicio;
            }
            inicio = inicio.siguiente;
        }
        return null;
    }

}

let r = new Ruta();

