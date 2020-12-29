<?php

namespace App\Http\Controllers;

use App\Models\Trabajador;
use Illuminate\Http\Request;

class TrabajadorController extends Controller
{
    //

    public function registrar(Request $req){

        if(Trabajador::find($req["trabajador"]["cedula_trabajador"])===null){
            $trabajador=new Trabajador();
            $trabajador->cedula_trabajador=$req["trabajador"]["cedula_trabajador"];
            $trabajador->nombre_trabajador=$req["trabajador"]["nombre_trabajador"];
            $trabajador->apellido_1_trabajador=$req["trabajador"]["apellido_1_trabajador"];
            $trabajador->apellido_2_trabajador=$req["trabajador"]["apellido_2_trabajador"];
            $trabajador->telefono_trabajador=$req["trabajador"]["telefono_trabajador"];
            $trabajador->correo_trabajador=$req["trabajador"]["correo_trabajador"];
            $trabajador->pregunta_1=0;
            $trabajador->pregunta_2=0;
            $trabajador->respuesta_1="";
            $trabajador->respuesta_2="";
            $trabajador->clave="";
            $trabajador->fecha_nacimiento=$req["trabajador"]["fecha_nacimiento"];
            $trabajador->fecha_ingreso=$req["trabajador"]["fecha_ingreso"];
            $trabajador->sexo_trabajador=$req["trabajador"]["sexo_trabajador"];
            $trabajador->estado_trabajador=$req["trabajador"]["estado_trabajador"];
            $trabajador->id_tipo_personal=$req["trabajador"]["id_tipo_personal"];
            $trabajador->id_perfil=$req["trabajador"]["id_perfil"];
            if($trabajador->save()){
                return [
                    "msj" =>"registro completado",
                    "estado" => true
                ];
            }
            else{
                return [
                    "msj" => "error al registrar",
                    "estado" => false
                ];
            }
        }
        else{
            return [
                "msj" => "error al registrar, ya hay un trabajador que tiene esta cedula ->".$req["trabajador"]["cedula_trabajador"],
                "estado" => false
            ];
        }
        
    }

    public function consultarTodos(Request $req){
        $listaTrabajadores= Trabajador::all();

        if(!empty($listaTrabajadores)){

            for($contador=0;$contador<sizeof($listaTrabajadores);$contador++){
                $listaTrabajadores[$contador]->tipo_personal;
                $listaTrabajadores[$contador]->perfil;
            }
            return [
                "msj" => "consulta completada",
                "estado" => true,
                "datos" => $listaTrabajadores
            ];

        }
        else{
            return [
                "msj" => "error al consultar",
                "estado" => false,
                "datos" => []
            ];
        }
    }


}
