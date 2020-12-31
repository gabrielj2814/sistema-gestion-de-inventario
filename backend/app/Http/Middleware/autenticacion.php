<?php

namespace App\Http\Middleware;

use App\Http\Controllers\AuthController;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class autenticacion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        if(isset($request["token"])){
            $AuthController=new AuthController();
            $token=$AuthController->desencriptarToken($request["token"]);
            $request["estado_token"]=$token;
            return $next($request);
        }
        else{
            // $request["estado_token"]=false;
            // return $next($request);
            return redirect("/token-invalido");
        }
    }


    

    public function validarVencimiento($fechaVencimientoToken){
        $fechaActual= strtotime(date("Y-m-d",time()));
        $fecha_vencimiento=(int)$fechaVencimientoToken;
        if($fechaActual===$fecha_vencimiento){
            echo true;
        }
        else if($fechaActual<$fecha_vencimiento){
            echo true;
        }
        else{
            echo false;
        }
        
    }
}
