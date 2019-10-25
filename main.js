import Base from "./base.js";
import Ruta from "./ruta.js";
class Main {
    constructor() {
        let ruta = new Ruta();
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let objBase = {
                nombre: document.querySelector("#nombre").value,
                minutos: document.querySelector("#minutos").value,
            }
            let nuevaBase = new Base(objBase);
            ruta.insertarBase(nuevaBase);
        })
    }
}
let m = new Main();