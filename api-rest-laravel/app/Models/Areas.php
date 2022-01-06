<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Areas extends Model
{
    use HasFactory;
    protected $table='areas';

   
    public function empleados()
    {
        return $this->hasOne('App\Models\Empleados');
    }
}
