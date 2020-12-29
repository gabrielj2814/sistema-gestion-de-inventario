<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trabajador extends Model
{
    use HasFactory;
    protected $table="trabajador";
    protected $primaryKey="cedula_trabajador";
    protected $incrementing=false;
    protected $keyType="string";
}
