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
        $perfil->save();

        if($perfil->id_perfil!==null){
            for($contador=0;$contador<sizeof($req["perfil"]["array_modulo_p"]);$contador++){
                $moduloP=$req["perfil"]["array_modulo_p"][$contador];
                $moduloSub=$req["perfil"]["array_modulo_sub"][$contador];
                $estadoModulo=$req["perfil"]["array_estado_modulo"][$contador];
                $moduloController=new modulo();
                $moduloController->registrarModulo($perfil,$moduloP,$moduloSub,$estadoModulo);
            }
        }

        // return "hola estoy registrando con el controlador perfil -> ".$perfil->id_perfil;
        return $req["perfil"];
    }



    function consultarTodos(Request $req){
        $perfil=new perfil();
        return $perfil::all();
    }

    function consultarPerfilId(Request $req,$id){
        $perfil=new perfil();
        return $perfil::find($id)->modulos;
    }

    function consultarPerfilNombre(Request $req,$nombre){
        $perfil= new perfil();
        return $perfil::where("nombre_perfil",$nombre)->get();
    }

    function eliminarPerfil(Request $req,$id){

        return perfil::where("id_perfil",$id)->delete();

    }

    function actualizarPerfil(Request $req,$id){
        $perfil=perfil::find($id);
        $perfil->nombre_perfil="Web Master xxx";
        $perfil->estado_perfil=1;
        $perfil->descripcion_perfil="-----";
        $perfil->save();
        return  $perfil->id_perfil;
    }



}
