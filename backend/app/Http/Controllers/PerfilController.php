<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\perfil;

class PerfilController extends Controller
{
    
    public function registrar(Request $req){
        
        $perfil=new perfil();
        $perfil->nombre_perfil=$req["perfil"]["nombre_perfil"];
        $perfil->estado_perfil=$req["perfil"]["estado_perfil"];
        $perfil->descripcion_perfil=$req["perfil"]["descripcion_perfil"];
        if($perfil->save()){
            for($contador=0;$contador<sizeof($req["perfil"]["array_modulo_p"]);$contador++){
                $moduloP=$req["perfil"]["array_modulo_p"][$contador];
                $moduloSub=$req["perfil"]["array_modulo_sub"][$contador];
                $estadoModulo=$req["perfil"]["array_estado_modulo"][$contador];
                $moduloController=new modulo();
                $moduloController->registrarModulo($perfil,$moduloP,$moduloSub,$estadoModulo);
            }
            return ["msj" => "registro completado" ,"estado" => true];

        }
        else{
            return ["msj" => "error al registrar" ,"estado" => false];
        }
        // return "hola estoy registrando con el controlador perfil -> ".$perfil->id_perfil;
    }

    public function consultarTodos(Request $req){
        $perfil=new perfil();
        // return $perfil::all();
        $listaPerfil=$perfil::all();
        for($contador=0;$contador<sizeof($listaPerfil);$contador++){
            $listaPerfil[$contador]->modulos;
        }
        return $listaPerfil;
    }

    public function consultarPerfilId(Request $req,$id){
        $perfil=new perfil();
        // return $perfil::find($id)->modulos;
        $perfilConsultado=$perfil::find($id);
        $perfilConsultado->modulos;
        return $perfilConsultado;
    }

    public function consultarPerfilNombre(Request $req,$nombre){
        $perfil= new perfil();
        // return $perfil::where("nombre_perfil",$nombre)->get();
        $perfilConsultado=$perfil::where("nombre_perfil",$nombre)->get();
        $perfilConsultado->modulos;
        return $perfilConsultado;
    }

    public function eliminarPerfil(Request $req,$id){
        return perfil::where("id_perfil",$id)->delete();
    }

    public function actualizarPerfil(Request $req,$id){
        $perfil=perfil::find($id);
        $perfil->nombre_perfil=$req["perfil"]["nombre_perfil"];
        $perfil->estado_perfil=$req["perfil"]["estado_perfil"];
        $perfil->descripcion_perfil=$req["perfil"]["descripcion_perfil"];
        if($perfil->save()){

            $modulo=new modulo;
            $modulo->eliminarModulos($perfil->id_perfil);

            for($contador=0;$contador<sizeof($req["perfil"]["array_modulo_p"]);$contador++){
                $moduloP=$req["perfil"]["array_modulo_p"][$contador];
                $moduloSub=$req["perfil"]["array_modulo_sub"][$contador];
                $estadoModulo=$req["perfil"]["array_estado_modulo"][$contador];
                $moduloController=new modulo();
                $moduloController->registrarModulo($perfil,$moduloP,$moduloSub,$estadoModulo);
            }
        return ["msj" => "registro completado" , "estado" => true];

        }
        else{
            return ["msj" => "error al actualizar" , "estado" => false];
        }
    }



}
