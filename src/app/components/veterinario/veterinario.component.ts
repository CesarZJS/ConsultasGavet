import { Component, OnInit } from '@angular/core';
import { VeterinarioService} from '../../service/veterinario/veterinario.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Veterinario } from '../../models/veterinario/veterinario'

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit{

  dataVeterinario: any[]=[];
  veterinarioEditar: any = null;
  formVeterinario = new FormGroup({
    codigo_veterinario: new FormControl(''),
    nombre_veterinario: new FormControl(''),
    domicilio_veterinario: new FormControl(''),
    escuela_veterinario: new FormControl(''),
    telefono_veterinario: new FormControl(''),
  });

  constructor(private apiService:VeterinarioService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(dataVeterinario=>{
      this.dataVeterinario=dataVeterinario;
      console.log(this.dataVeterinario);
    });
  }

  AgregarVeterinario(){
    this.apiService.agregarVeterinario(this.formVeterinario.value).subscribe((result)=>{
      console.log(result);
      this.limpiarFormulario();
      this.llenarData();
    },
    error => {
      console.error('Error al agregar Carro', error);
    });
  }

  limpiarFormulario() {
    this.formVeterinario.reset();
    this.veterinarioEditar = null;
  }

  ActualizarVeterinario(){
    if (this.veterinarioEditar && this.veterinarioEditar.codigo_veterinario){
      const id = { ...this.formVeterinario.value, id: this.veterinarioEditar.codigo_veterinario};
      this.apiService.actualizarVeterinario(id).subscribe(result=>{
          console.log('Respuesta del servidor', result);
          this.limpiarFormulario();
          this.llenarData();
          this.veterinarioEditar = null;
        },
      );
    }
  }

  editarVeterinario(veterinario: any){
    if(veterinario.codigo_veterinario){
      this.formVeterinario.setValue({
        codigo_veterinario: veterinario.codigo_veterinario,
        nombre_veterinario: veterinario.nombre_veterinario,
        domicilio_veterinario: veterinario.domicilio_veterinario,
        escuela_veterinario: veterinario.escuela_veterinario,
        telefono_veterinario: veterinario.telefono_veterinario,
      });
      this.veterinarioEditar = veterinario;
    }
  }

  eliminar(codigo_veterinario: number){
    this.apiService.eliminarVeterinario(codigo_veterinario).subscribe(result=>{
      console.log(result);
      this.llenarData();
    });
  }

}
