import Ruta from "./ruta.js";
import Base from "./base.js";

let btnAgregar = document.querySelector("#btn"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divBase = document.querySelector("#inventario"),
    divConsulta = document.querySelector("#consulta");

btnAgregar.addEventListener("click", () => {
    m.agregarBaseNuevo();
});

btnBorrar.addEventListener("click", () => {

});

btnBuscar.addEventListener("click", () => {
    m.hacerConsulta();
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

}

let m = new Main();