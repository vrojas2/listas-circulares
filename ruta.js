export default class Ruta {
    constructor() {
        this._inicio = null;
        this._tamaño = 0;
        this._baseString = "";
    }

    get baseString() {
        return this._baseString;
    }
    
    get rutaString() {
        return this._rutaString;
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

    borrarBase(nombre) {
        if (this._inicio.nombre == nombre) {
            if (this._inicio.siguiente == this._inicio) {
                this._inicio = null;
                this._tamaño--;
            } else if (this._inicio != null) {
                this._inicio.anterior.siguiente = this._inicio.siguiente;
                this._inicio.siguiente.anterior = this._inicio.anterior;
                this._inicio = this._inicio.siguiente;
                this._tamaño--;
            }
        } else {
            this.buscarBaseBorrar(nombre);
        }
    }

    buscarBaseBorrar(nombre) {
        let base = this.buscarBasesRegistradas(nombre, this._inicio.siguiente);
        if (base == null) {
            return;
        } else {
            base.siguiente.anterior = base.anterior;
            base.anterior.siguiente = base.siguiente;
            this._tamaño--;
        }
    }

    agregarBaseEnPosicion(base, posicion) {
        if (posicion <= (this._tamaño + 1) && (posicion > 0)) {
            if (posicion == 1) {
                if (this._inicio === null) {
                    this.agregarProducto(base);
                } else {
                    this.insertarAntesInicio(base, this._inicio);
                    this._inicio = this._inicio.anterior;
                    this._tamaño++;
                }
            } else {
                let productoAnterior = this.buscarPorProductoAnterior(posicion - 1, this._inicio);
                console.log(productoAnterior);
                base.siguiente = productoAnterior.siguiente;
                base.anterior = productoAnterior;
                productoAnterior.siguiente.anterior = base;
                productoAnterior.siguiente = base;
                this._tamaño++;
            }
        } else {
            return false;
        }
    }

    buscarPorProductoAnterior(posicion, inicio) {
        let i = 1;
        do {
            if (i == posicion) {
                return inicio;
            }
            inicio = inicio.siguiente;
            i++;
        } while (inicio != this._inicio);
    }

}

let r = new Ruta();

