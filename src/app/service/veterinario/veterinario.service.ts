import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  api_url = "http://localhost:8080/veterinario";
  urlApiPost = "http://localhost:8080/veterinario/ingresar";
  urlApiPut = "http://localhost:8080/veterinario/actualizar";
  urlApiDelete = "http://localhost:8080/veterinario/eliminar/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarVeterinario(formVeterinario: any): Observable<any>{
    return this.http.post(this.urlApiPost, formVeterinario);
  }

  public actualizarVeterinario(veterinarioEditar: any): Observable<any>{
    return this.http.put(this.urlApiPut, veterinarioEditar);
  }

  public eliminarVeterinario(codigo_veterinario: number){
    console.log(codigo_veterinario);
    return this.http.delete(this.urlApiDelete+codigo_veterinario);
  }
}
