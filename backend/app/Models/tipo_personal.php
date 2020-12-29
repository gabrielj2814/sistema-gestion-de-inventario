<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipo_personal extends Model
{
    use HasFactory;

    protected $table="tipo_personal";
    protected $primaryKey="id_tipo_personal";
    protected $keyType="integer";

    


}
