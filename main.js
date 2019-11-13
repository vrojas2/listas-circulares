import Ruta from "./ruta.js";
import Base from "./base.js";

let btnAgregar = document.querySelector("#registrar"),
    btnBorrar = document.querySelector("#borrar"),
    btnBuscar = document.querySelector("#consultar"),
    divBase = document.querySelector("#inventario"),
    divConsulta = document.querySelector("#consulta"),
    bttnInsertar = document.querySelector("#insertar"),
    bttnInicio = document.querySelector("#inicio"),
    divRuta = document.querySelector("#mostarRuta"),
    divEstado = document.querySelector("#estado");

btnAgregar.addEventListener("click", () => {
    m.agregarBaseNuevo();
});

btnBorrar.addEventListener("click", () => {
    m.borrarDelInventario(document.querySelector("#borrarNombre").value);
});

btnBuscar.addEventListener("click", () => {
    m.hacerConsulta();
});

bttnInsertar.addEventListener("click", () => {
    let posicion = document.querySelector("#posicion").value;
    m.insertarBase(posicion);
});

bttnInicio.addEventListener("click", () => {
    m.inicioRuta(document.querySelector("#inicioBase").value,
    document.querySelector("#inicioHora").value,
    document.querySelector("#finalHora").value);
});

class Main {
    constructor() {
        this._rutaTotal = new Ruta();
    }
    
    infoInputs() {
        let nuevoBase = {
            nombre: document.querySelector("#nombre").value,
            minutos: document.querySelector("#minutos").value
        }
        let objNuevoBase = new Base(nuevoBase);
        return objNuevoBase;
    }

    agregarBaseNuevo() {
        divEstado.innerHTML = "";
        let objNuevoBase = this.infoInputs();
        this._rutaTotal.agregarProducto(objNuevoBase);
        this.mostrarBases();
    }

    mostrarBases() {
        this._rutaTotal.imprimir();
        divBase.innerHTML = this._rutaTotal.baseString;
    }

    hacerConsulta() {
        nombre = document.querySelector("#buscar").value;
        divConsulta.innerHTML = this._rutaTotal.buscarConsulta(nombre);
    }

    borrarDelInventario(nombre) {
        divEstado.innerHTML = "";
        this._rutaTotal.borrarBase(nombre);
        this.mostrarBases();
    }

    insertarBase(posicion) {
        divEstado.innerHTML = "";
        let insertarValidacion = this._rutaTotal.agregarBaseEnPosicion(this.infoInputs(), posicion);
        if (insertarValidacion == false) {
            divEstado.innerHTML = "Entrada una posicion valida o base a insertar";
        } else {
            this.mostrarBases();
        }
    }

    inicioRuta(nombre, iHora, fHora) {
        divRuta.innerHTML = "";
        if(this._rutaTotal.ejecutarRuta(nombre, iHora, fHora) == false) {
            divRuta.innerHTML = "Base no encontrada";
        } else {
            this.mostrarRuta();
        }
    }

    mostrarRuta() {
        divRuta.innerHTML = this._rutaTotal.rutaString;
    }

}

let m = new Main();