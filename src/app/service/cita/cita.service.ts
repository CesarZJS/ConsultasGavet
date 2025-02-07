import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  api_url = "http://localhost:8080/cita";
  urlApiPost = "http://localhost:8080/cita/ingresar";
  urlApiPut = "http://localhost:8080/cita/actualizar";
  urlApiDelete = "http://localhost:8080/cita/eliminar/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCita(formCita: any): Observable<any>{
    return this.http.post(this.urlApiPost,formCita);
  }

  public actualizarCita(citaEditar: any): Observable<any>{
    return this.http.put(this.urlApiPut, citaEditar);
  }

  public eliminarCita(codigo_cita: number){
    console.log(codigo_cita);
    return this.http.delete(this.urlApiDelete+codigo_cita);
  }
}
