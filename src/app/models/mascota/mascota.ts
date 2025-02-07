export class Mascota {
    codigo_mascota: number;
    nombre_mascota: String;
    domicilio_mascota: String;
    observacion_mascota: String;
    raza_mascota: String;
    color_mascota: String;
    tipo_mascota: number;

    constructor(){
        this.codigo_mascota = 0;
        this.nombre_mascota = "";
        this.domicilio_mascota = "";
        this.observacion_mascota = "";
        this.raza_mascota = "";
        this.color_mascota = "";
        this.tipo_mascota = 0;
    }
}