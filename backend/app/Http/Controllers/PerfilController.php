<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\perfil;

class PerfilController extends Controller
{
    
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

    function consultarPerfilId(Request $reg,$id){
        $perfil=new perfil();
        return $perfil::find($id);
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
