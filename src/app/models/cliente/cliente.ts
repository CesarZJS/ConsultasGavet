export class Cliente {
    codigo_cliente: number;
    nombre_cliente: String;
    domicilio_cliente: String;
    telefono_cliente: String;
    dni_cliente: number;
    edad_cliente: number;

    constructor(){
        this.codigo_cliente = 0;
        this.nombre_cliente = "";
        this.domicilio_cliente = "";
        this.telefono_cliente = "";
        this.dni_cliente = 0;
        this.edad_cliente = 0;
    }
}