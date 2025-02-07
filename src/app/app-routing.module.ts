import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';
import { CitaComponent } from './components/cita/cita.component';

const routes: Routes = [
  {path:"cliente", component: ClienteComponent},
  {path:"mascota", component: MascotaComponent},
  {path:"veterinario", component: VeterinarioComponent},
  {path:"cita", component: CitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
