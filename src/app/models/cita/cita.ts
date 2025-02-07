export class Cita {
    codigo_cita: number;
    fecha_cita: String;
    codigo_cliente: number;
    codigo_veterinario: number;
    codigo_mascota: number;

    constructor(){
        this.codigo_cita = 0;
        this.fecha_cita = "";
        this.codigo_cliente = 0;
        this.codigo_veterinario = 0;
        this.codigo_mascota = 0;
    }
}
