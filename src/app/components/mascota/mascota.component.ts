import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../service/mascota/mascota.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Mascota } from '../../models/mascota/mascota'

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit{

  dataMascota: any[]=[];
  mascotaEditar: any = null;
  formMascota = new FormGroup({
    codigo_mascota: new FormControl(''),
    nombre_mascota: new FormControl(''),
    domicilio_mascota: new FormControl(''),
    observacion_mascota: new FormControl(''),
    raza_mascota: new FormControl(''),
    color_mascota: new FormControl(''),
    tipo_mascota: new FormControl(''),
  });

  constructor(private apiService:MascotaService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(dataMascota=>{
      this.dataMascota=dataMascota;
      console.log(this.dataMascota);
    });
  }

  AgregarMascota(){
    this.apiService.agregarMascota(this.formMascota.value).subscribe((result)=>{
      console.log(result);
      this.limpiarFormulario();
      this.llenarData();
    },
    error => {
      console.error('Error al agregar Mascota', error);
    }
    );
  }

  limpiarFormulario() {
    this.formMascota.reset();
    this.mascotaEditar = null;
  }

  ActualizarMascota(){
    if (this.mascotaEditar && this.mascotaEditar.codigo_mascota){
      const id = { ...this.formMascota.value, id: this.mascotaEditar.codigo_mascota};
      this.apiService.actualizarMascota(id).subscribe(result=>{
        console.log('Respuesta del servidor', result);
        this.limpiarFormulario();
        this.llenarData();
        this.mascotaEditar = null;
      },
      );
    }
  }

  editarMascota(mascota: any){
    if(mascota.codigo_mascota){
      this.formMascota.setValue({
        codigo_mascota: mascota.codigo_mascota,
        nombre_mascota: mascota.nombre_mascota,
        domicilio_mascota: mascota.domicilio_mascota,
        observacion_mascota: mascota.observacion_mascota,
        raza_mascota: mascota.raza_mascota,
        color_mascota: mascota.color_mascota,
        tipo_mascota: mascota.tipo_mascota,
      });
      this.mascotaEditar = mascota;
    }
  }

  eliminar(codigo_mascota: number){
    this.apiService.eliminarMascota(codigo_mascota).subscribe(result=>{
      console.log(result);
      this.llenarData();
    });
  }
}
