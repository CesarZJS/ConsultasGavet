import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../../models/cliente/cliente'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  dataCliente: any[]=[];
  clienteEditar: any = null;
  formCliente = new FormGroup({
    codigo_cliente: new FormControl(''),
    nombre_cliente: new FormControl(''),
    domicilio_cliente: new FormControl(''),
    telefono_cliente: new FormControl(''),
    dni_cliente: new FormControl(''),
    edad_cliente: new FormControl(''),
  });

  constructor(private apiService:ClienteService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(dataCliente=>{
      this.dataCliente=dataCliente;
      console.log(this.dataCliente);
    });
  }

  AgregarCliente(){
    this.apiService.agregarCliente(this.formCliente.value).subscribe((result)=>{
      console.log(result);
      this.limpiarFormulario();
      this.llenarData();
    },
    error => {
      console.error('Error al agregar Cliente', error);
    }
    );
  }

  limpiarFormulario() {
    this.formCliente.reset();
    this.clienteEditar = null;
  }

  ActualizarCliente(){
    if (this.clienteEditar && this.clienteEditar.codigo_cliente){
      const id = {...this.formCliente.value, id: this.clienteEditar.codigo_cliente};
      this.apiService.actualizarCliente(id).subscribe(result=>{
        console.log('Respuesta del servidor', result);
        this.limpiarFormulario();
        this.llenarData();
        this.clienteEditar = null;
      },
      );
    }
  }

  editarCliente(cliente: any){
    if(cliente.codigo_cliente){
      this.formCliente.setValue({
        codigo_cliente: cliente.codigo_cliente,
        nombre_cliente: cliente.nombre_cliente,
        domicilio_cliente: cliente.domicilio_cliente,
        telefono_cliente: cliente.telefono_cliente,
        dni_cliente: cliente.dni_cliente,
        edad_cliente: cliente.edad_cliente,
      });
      this.clienteEditar = cliente;
    }
  }

  eliminar(codigo_cliente: number){
    this.apiService.eliminarCliente(codigo_cliente).subscribe(result=>{
      console.log(result);
      this.llenarData();
    })
  }
}