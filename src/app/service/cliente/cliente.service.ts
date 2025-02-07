import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api_url = "http://localhost:8080/cliente";
  urlApiPost = "http://localhost:8080/cliente/ingresar";
  urlApiPut = "http://localhost:8080/cliente/actualizar";
  urlApiDelete = "http://localhost:8080/cliente/eliminar/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCliente(formCliente: any): Observable<any>{
    return this.http.post(this.urlApiPost,formCliente);
  }

  public actualizarCliente(clienteEditar: any): Observable<any>{
    return this.http.put(this.urlApiPut, clienteEditar);
  }

  public eliminarCliente(codigo_cliente: number){
    console.log(codigo_cliente);
    return this.http.delete(this.urlApiDelete+codigo_cliente);
  }

}
