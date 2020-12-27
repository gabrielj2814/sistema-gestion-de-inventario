<?php

namespace App\Http\Controllers;

use App\Models\modulo as ModelsModulo;
use Illuminate\Http\Request;

class modulo extends Controller
{
    //

    public function registrarModulo($perfil,$moduloP,$subModulo,$estadoModulo){
        $modulo=new ModelsModulo();
        $modulo->modulo=$moduloP;
        $modulo->sub_modulo=$subModulo;
        $modulo->id_perfil=$perfil->id_perfil;
        $modulo->estado_modulo=$estadoModulo;
        $modulo->save();
        return ($modulo->id_modulo!==null)?true:false;

    }

    public function eliminarModulos($idPerfil){
        ModelsModulo::where("id_perfil",$idPerfil)->delete();
    }

}
