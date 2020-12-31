<?php


namespace App\Http\Controllers;

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
        $fecha_vencimiento= date("Y-m-d");
        $payload = array(
            "id" => $this->cedula,
            "nombre" => $this->nombreUsuario,
            "perfil" => $this->perfil,
            "tipoPersonal" => $this->tipoPersonal,
            "fecha_vencimiento_token"=> date("Y-m-d",strtotime($fecha_vencimiento." + 2 month"))
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
        JWT::$leeway = 60; // $leeway in seconds
        $decoded = JWT::decode($token, $this->keyJwt, array('HS256'));
        return $decoded;
    }

    




}
