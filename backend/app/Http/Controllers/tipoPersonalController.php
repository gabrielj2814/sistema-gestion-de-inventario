<?php

namespace App\Http\Controllers;

use App\Models\tipo_personal;
use Illuminate\Http\Request;

use function PHPSTORM_META\type;

class tipoPersonalController extends Controller
{
    
    public function registrar(Request $req){
        $tipoPersonal=new tipo_personal();
        $tipoPersonal->nombre_tipo_personal=$req["tipo_personal"]["nombre_tipo_personal"];
        $tipoPersonal->estado_tipo_personal=$req["tipo_personal"]["estado_tipo_personal"];
        if($tipoPersonal->save()){
            return ["msj" => "registro completado","estado" => true];
        }
        else{
            return ["msj" => "error al registrar","estado" => false];
        }
        
    }

    public function consultarTodos(){
        $listaTipoPersonal=tipo_personal::all();
        if(!empty($listaTipoPersonal)){

            return ["msj" => "consulta completada","estado" => true, "datos" =>$listaTipoPersonal];
        }
        else{
            return ["msj" => "error al consultar","estado" => false, "datos" => []];
        }
    }

}
