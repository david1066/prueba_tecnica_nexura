import { Component, OnInit } from '@angular/core';

import { faUser,faAt ,faVenusMars,faBriefcase,faEnvelope,faUserPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent implements OnInit {
  faUser = faUser;
  faAt=faAt;
  faVenusMars=faVenusMars;
  faBriefcase=faBriefcase;
  faEnvelope=faEnvelope;
  faUserPlus=faUserPlus;
  faTrash=faTrash;
  public empleados:Empleado[]=[];
  constructor(private _empleadoService:EmpleadoService,) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
  
      this._empleadoService.getEmpleados().subscribe(
        response=>{
         this.empleados=response.empleados;
         console.log(this.empleados);
        },
        error=>{
          console.log(<any>error);
        }
      );
  
  
  }

   sexo(sexo_id:string): any {
    if(sexo_id=='M' ||sexo_id=='m'){
    return 'Masculino';
    }else if(sexo_id=='f' ||sexo_id=='F'){
      return 'Femenino';
    }else{
      return '';
    }
  }
  boletin(boletin:number): any {
    if(boletin==1){
      return 'Sí';
    }else{
      return 'No';
    }
  }
  delete(id:number){
    


    Swal.fire({
      title: 'Está seguro que desea eliminarlo?',
      text: "No podra revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this._empleadoService.delete(id).subscribe(
          response=>{
            if(response.status =='success'){
              this.getEmpleados();
              Swal.fire(
                'Eliminado!',
                'El empleado ha sido eliminado.',
                'success'
              )
            }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El empleado no ha sido eliminado!'
            })
          }
          
        },error=>{
    
          console.log(<any> error);
        });

        
      }
    });
  }

}
