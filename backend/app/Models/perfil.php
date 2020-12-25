<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class perfil extends Model
{
    protected $table="perfil";
    protected $primaryKey="id_perfil";
    protected $keyType="integer";


    function modulos(){
        return $this->hasMany(modulo::class,"id_perfil");
    }


}
