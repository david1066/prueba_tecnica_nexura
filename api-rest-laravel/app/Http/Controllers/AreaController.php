<?php

namespace App\Http\Controllers;
use App\Models\Areas;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    public function index()
    {
        $areas=Areas::all();
        
        return response()->json(['code' => 200, 'status' => 'success', 'areas' => $areas], 200);
   
    }
}
