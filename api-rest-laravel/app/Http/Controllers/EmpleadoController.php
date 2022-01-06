<?php

namespace App\Http\Controllers;

use App\Models\Empleados;
use App\Models\EmpleadoRol;
use Illuminate\Http\Request;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $empleados=Empleados::all()->load('areas');
        
        return response()->json(['code' => 200, 'status' => 'success', 'empleados' => $empleados], 200);
   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         //recoger datos por post
         $json = $request->input('json', null);
         $params = json_decode($json);
         $params_array = json_decode($json, true);
 
         if (!empty($params_array)) {
            
             
           //validaciones 
             $validate = \Validator::make($params_array, [
                 'nombre' => 'required',
                 'email' => ['email:rfc,dns', 'unique:empleado'],
                 'sexo' => 'required',
                 'area_id' => 'integer',
                 'descripcion'=>'required',
                 'roles'=>'required',
                 
             ]);
             //si hay errores devuelve un mensaje
             if ($validate->fails()) {
                 $data = [
                     'code' => 400,
                     'status' => 'error',
                     'message' => 'No se ha guardado el empleado '.$validate->errors()
                 ];
             } else {
                 $empleado = new Empleados();

                 $empleado->nombre=$params->nombre;
                 $empleado->email=$params->email;
                 if($params->sexo=='1'){
                     $sexo='F';
                 }else{
                    $sexo='M';
                 }
                 $empleado->sexo=$sexo;
                 $empleado->area_id=$params->area_id;
                 $empleado->boletin=1;
                 $empleado->descripcion=$params->descripcion;
                 $empleado->save();

                 foreach($params_array['roles'] as $rol){
                    $empleadorol= new EmpleadoRol();
                    $empleadorol->empleado_id=$empleado->id;
                    $empleadorol->rol_id=$rol;
                    $empleadorol->save();
                 }
                 
                 // guardar el empleado
 
                 $data = [
                     'code' => 200,
                     'status' => 'success',
                     'empleado' => $empleado
                 ];
                 // devolver respuesta
             }
         } else {
             $data = [
                 'code' => 400,
                 'status' => 'error',
                 'message' => 'envia los datos correctamente'
             ];
         }
         return response()->json($data, $data['code']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empleados  $empleados
     * @return \Illuminate\Http\Response
     */
    public function show(Empleados $empleados)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Empleados  $empleados
     * @return \Illuminate\Http\Response
     */
    public function edit(Empleados $empleados)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empleados  $empleados
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Empleados $empleados)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empleados  $empleados
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      

       $empleado =Empleados::where('id',$id)->first();

       if(!empty($empleado)){
        
        
        $empleado->delete();
        //devolver algo
        $data = [
            'code' => 200,
            'status' => 'success', 'empleado' => $empleado
        ];
       }else{
        $data = [
            'code' => 404,
            'status' => 'error', 'message' => 'el empleado no existe'
        ];
       }

       return response()->json($data, $data['code']);
    }
}
