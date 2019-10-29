import Ruta from "./ruta.js";
import Base from "./base.js";

let btnAgregar = document.querySelector("#btn"),
    btnBorrar = document.querySelector("#btnBorrar"),
    btnBuscar = document.querySelector("#btnBuscar"),
    divBase = document.querySelector("#inventario");

btnAgregar.addEventListener("click", () => {
    m.agregarBaseNuevo(m.infoInputs());
    //console.log(m._inventarioTotal);

});

btnBorrar.addEventListener("click", () => {

});

btnBuscar.addEventListener("click", () => {

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
        this.mostrarInventario();
    }

    mostrarInventario() {
        this._rutaTotal.imprimir();
        divBase.innerHTML = this._rutaTotal.baseString;
    }

}

let m = new Main();