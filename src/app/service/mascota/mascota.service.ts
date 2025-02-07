import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  api_url = "http://localhost:8080/mascota";
  urlApiPost = "http://localhost:8080/mascota/ingresar";
  urlApiPut = "http://localhost:8080/mascota/actualizar";
  urlApiDelete = "http://localhost:8080/mascota/eliminar/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarMascota(formMascota: any): Observable<any>{
    return this.http.post(this.urlApiPost, formMascota);
  }

  public actualizarMascota(mascotaEditar: any): Observable<any>{
    return this.http.put(this.urlApiPut, mascotaEditar);
  }

  public eliminarMascota(codigo_mascota: number){
    console.log(codigo_mascota);
    return this.http.delete(this.urlApiDelete+codigo_mascota);
  }
}
