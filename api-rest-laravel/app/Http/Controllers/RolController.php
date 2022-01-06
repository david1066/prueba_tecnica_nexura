<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Roles;

class RolController extends Controller
{
    public function index()
    {
        $roles=Roles::all();
        
        return response()->json(['code' => 200, 'status' => 'success', 'roles' => $roles], 200);
   
    }
}
