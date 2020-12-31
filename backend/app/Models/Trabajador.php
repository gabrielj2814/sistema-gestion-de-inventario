<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


//Añadimos la clase JWTSubject 
use Tymon\JWTAuth\Contracts\JWTSubject;

class Trabajador extends Model implements JWTSubject
{
    use HasFactory, Notifiable;




    protected $table="trabajador";
    protected $primaryKey="cedula_trabajador";
    public $incrementing=false;
    protected $keyType="string";


    public function tipo_personal(){
        return $this->belongsTo(tipo_personal::class,"id_tipo_personal");
    }

    public function perfil(){
        return $this->belongsTo(perfil::class,"id_perfil");
    }

    public function getJWTIdentifier(){
        return $this->getKey();
    }
    
    public function getJWTCustomClaims(){
        return [];
    }

    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',
    // ];

    // /**
    //  * The attributes that should be hidden for arrays.
    //  *
    //  * @var array
    //  */
    // protected $hidden = [
    //     'password',
    //     'remember_token',
    // ];

    // /**
    //  * The attributes that should be cast to native types.
    //  *
    //  * @var array
    //  */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];

}
