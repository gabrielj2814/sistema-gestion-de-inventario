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

    public function eliminar(Request $req,$id){
        $tipoPersonal=tipo_personal::find($id);
        if($tipoPersonal!==null){
            $tipoPersonal->delete();
            return ["msj" => "eliminación completada","estado" => true];
        }
        else{
            return ["msj" => "error al eliminar","estado" => false];
        }
    }

    public function consultar(Request $req,$id){
        $tipoPersonal=tipo_personal::find($id);
        if($tipoPersonal!==null){
            return ["msj" => "consulta completada","estado" => true, "datos" => $tipoPersonal];
        }
        else{
            return ["msj" => "error al consultar","estado" => false, "datos" => []];
        }
    }

    public function consultarNombre(Request $req,$nombre){
        $listaTipoPersonal= tipo_personal::where("nombre_tipo_personal","LIKE","%$nombre%")->get();
        if(!empty($listaTipoPersonal)){
            return ["msj" => "consulta completada","estado" => true, "datos" => $listaTipoPersonal];
        }
        else{
            return ["msj" => "error al consultar","estado" => false, "datos" => []];
        }


    }

    public function actualizar(Request $req,$id){
        $tipoPersonal= tipo_personal::find($id);
        if($tipoPersonal!==null){
            $tipoPersonal->nombre_tipo_personal=$req["tipo_personal"]["nombre_tipo_personal"];
            $tipoPersonal->estado_tipo_personal=$req["tipo_personal"]["estado_tipo_personal"];
            if($tipoPersonal->save()){
                return ["msj" => "actualización completada","estado" => true];
            }
            else{
                return ["msj" => "error al actualizar","estado" => false];
            }
        }
        else{
            return ["msj" => "error al actualizar, no fue encontrado el tipo personal al que intento actualizar","estado" => false];
        }
    }

}
