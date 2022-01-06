import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';



//definir las rutas
const appRoutes: Routes = [

 {path:'empleados', component: EmpleadoComponent},
 {path:'crear-empleado', component: CrearEmpleadoComponent},
 {path:'**', component: EmpleadoComponent},
];

//exportar configuracion
 export const appRoutingProviders: any[]= [];
 export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
