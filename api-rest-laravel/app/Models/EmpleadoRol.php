<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class EmpleadoRol extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table='empleado_rol';
}
