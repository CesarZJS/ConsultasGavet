import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/cita/cita.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Cita } from '../../models/cita/cita'

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  dataCita: any[]=[];
  citaEditar: any = null;
  formCita = new FormGroup({
    codigo_cita: new FormControl(''),
    fecha_cita: new FormControl(''),
    codigo_cliente: new FormControl(''),
    codigo_veterinario: new FormControl(''),
    codigo_mascota: new FormControl(''),
  });

  constructor(private apiService:CitaService){}

  ngOnInit(): void {
    this.llenarData();
      
  }

  llenarData(){
    this.apiService.getData().subscribe(dataCita=>{
      this.dataCita=dataCita;
      console.log(this.dataCita);
    });
  }

  AgregarCita(){
    this.apiService.agregarCita(this.formCita.value).subscribe((result)=>{
      console.log(result);
      this.limpiarFormulario();
      this.llenarData();
    },
    error => {
      console.error('Error al agregar Cita', error);
    }
    );
  }

  limpiarFormulario() {
    this.formCita.reset();
    this.citaEditar = null;
  }

  ActualizarCita(){
    if (this.citaEditar && this.citaEditar.codigo_cita){
      const id = {...this.formCita.value, id: this.citaEditar.codigo_cita};
      this.apiService.actualizarCita(id).subscribe(result=>{
        console.log('Respuesta del servidor', result);
        this.limpiarFormulario();
        this.llenarData();
        this.citaEditar = null;
      },
      );
    }
  }

  editarCita(cita: any){
    if(cita.codigo_cita){
      this.formCita.setValue({
        codigo_cita: cita.codigo_cita,
        fecha_cita: cita.fecha_cita,
        codigo_cliente: cita.codigo_cliente,
        codigo_veterinario: cita.codigo_veterinario,
        codigo_mascota: cita.codigo_mascota,
      });
      this.citaEditar = cita;
    }
  }

  eliminar(codigo_cita: number){
    this.apiService.eliminarCita(codigo_cita).subscribe(result=>{
      console.log(result);
      this.llenarData();
    })
  }
}
