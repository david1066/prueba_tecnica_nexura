import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area';
import { Empleado } from 'src/app/models/empleado';
import { Rol } from 'src/app/models/rol';
import { AreaService } from 'src/app/services/area.service';
import { RolService } from 'src/app/services/rol.service';
import * as $ from 'jquery';
import { EmpleadoService } from 'src/app/services/empleado.service';
@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css'],
  providers: [AreaService,RolService]
})
export class CrearEmpleadoComponent implements OnInit {
  public empleado: Empleado;
   public status: string;
   public areas: Area[]=[];
   public roles: Rol[]=[];
   public vcheckbox : boolean=true;
   public varea_id : boolean=true;
   public vsexo : boolean=true;
  constructor(private _areaService: AreaService,private _rolService: RolService, private _empleadoService: EmpleadoService) { 
    this.empleado=new Empleado(0,'','','',0,0,'','',[])
    this.status='';
    this.getAreas();
    this.getRoles();
    
  }

  getAreas(){
    this._areaService.getAreas().subscribe(
      response=>{
       this.areas=response.areas;
       console.log(this.areas);
      },
      error=>{
        console.log(<any>error);
      }
    );

  }

  getRoles(){
    this._rolService.getRoles().subscribe(
      response=>{
       this.roles=response.roles;
       console.log(this.roles);
      },
      error=>{
        console.log(<any>error);
      }
    );

  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
   
    if(this.checked().length){
      
      this.vcheckbox =true;
    }else{
     this.vcheckbox =false;
    }
    if(this.empleado.area_id!=0 && this.empleado.area_id!=undefined){
      this.varea_id =true;
    }else{
      this.varea_id =false;
    }
 
    if( this.empleado.sexo!=undefined && this.empleado.sexo!=''){
      this.vsexo =true;

    
    }else{
      this.vsexo =false;
    }
 


    if(this.vcheckbox &&  this.varea_id && this.vsexo){

    
      this.empleado.roles=this.checked();
      this._empleadoService.create(this.empleado).subscribe(
        response=>{
         this.areas=response.areas;
         if(response.status=='success'){

          form.reset();
          this.status='success';
         }else{
          this.status='error';
         }
        },
        error=>{
          console.log(<any>error);
          this.status='error';
        }
      );
    }else{
      this.status='error';
    }
   console.log(this.empleado);

  }
  checked():any{
    var valoresCheck:any = [];

    $("input[type=checkbox]:checked").each(function(){
        valoresCheck.push($(this).val());
    });

    return valoresCheck;
  }
}
