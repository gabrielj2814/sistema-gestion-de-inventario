<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Trabajador extends Model
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


}
