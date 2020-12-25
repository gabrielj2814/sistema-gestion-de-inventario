<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modulo extends Model
{
    // use HasFactory;

    protected $table="modulo";
    protected $primaryKey="id_modulo";
    protected $typeKey="integer";

    function perfil(){
        return $this->belongsTo(perfil::class,"id_perfil");
    }

}
