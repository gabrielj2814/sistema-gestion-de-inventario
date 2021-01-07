<?php


namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use \Firebase\JWT\JWT;
use Illuminate\Support\Facades\Date;

class AuthController extends Controller
{
    //
    private $cedula,$nombreUsuario,$perfil,$tipoPersonal,$keyJwt;

    function __construct($_cedula=null,$_nombreUsuario=null,$_perfil=null,$_tipoPersonal=null){
        $this->cedula=$_cedula;
        $this->nombreUsuario=$_nombreUsuario;
        $this->perfil=$_perfil;
        $this->tipoPersonal=$_tipoPersonal;
        $this->keyJwt=env("JWT_CLAVE");
    }

    private function generarPayload(){
        $payload = array(
            "id" => $this->cedula,
            "nombre" => $this->nombreUsuario,
            "perfil" => $this->perfil,
            "tipoPersonal" => $this->tipoPersonal,
            "fecha_vencimiento_token"=> strtotime(date("Y-m-d",time())." + 2 month")
        );
        return $payload;
    }

    private function encriptarToken($payload){
        $jwt = JWT::encode($payload,$this->keyJwt);
        return $jwt;
    } 

    public function generarToken(){
        $payload=$this->generarPayload();
        return $this->encriptarToken($payload);
    }

     public function desencriptarToken($token){
        try{
            JWT::$leeway = 60; // $leeway in seconds
            $decoded = JWT::decode($token, $this->keyJwt, array('HS256'));
            return $decoded;
        }
        catch(Exception $error){
            return [];
        }
    }

    public function validarVencimiento($fechaVencimientoToken){
        $fechaActual= strtotime(date("Y-m-d",time()));
        $fecha_vencimiento=(int)$fechaVencimientoToken;
        if($fechaActual===$fecha_vencimiento){
            return true;
        }
        else if($fechaActual<$fecha_vencimiento){
            return true;
        }
        else{
            return false;
        }
        
    }

    




}
