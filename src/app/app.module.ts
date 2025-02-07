import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent} from './components/cliente/cliente.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';
import { CitaComponent } from './components/cita/cita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MascotaComponent,
    VeterinarioComponent,
    CitaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
