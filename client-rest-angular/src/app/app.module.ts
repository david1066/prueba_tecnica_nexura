import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { AreaService } from './services/area.service';
import { RolService } from './services/rol.service';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    appRoutingProviders,
    EmpleadoService,
    AreaService,
    RolService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
