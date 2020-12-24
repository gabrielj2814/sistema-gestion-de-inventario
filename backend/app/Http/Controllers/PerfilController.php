<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\perfil;

class PerfilController extends Controller
{
    //


    public function registrar(Request $reg){
        $perfil=new perfil();
        $perfil->nombre_perfil="contador";
        $perfil->estado_perfil=0;
        $perfil->descripcion_perfil="contador nvl 2";
        $perfil->save();
        return "hola estoy registrando con el controlador perfil -> ".$perfil->id_perfil;
    }

    function consultarTodos(Request $req){
        $perfil=new perfil();
        return $perfil::all();
    }



}
