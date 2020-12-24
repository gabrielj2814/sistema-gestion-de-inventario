<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Trabajador extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trabajador', function (Blueprint $table) {
            $table->string("cedula_trabajador",150)->primary();
            $table->string("nombre_trabajador",150);
            $table->string("apellido_1_trabajador",150);
            $table->string("apellido_2_trabajador",150)->nullable();
            $table->string("telefono_trabajador",11)->nullable();
            $table->string("correo_trabajador",250)->nullable();
            $table->integer("pregunta_1");
            $table->integer("pregunta_2");
            $table->string("respuesta_1",300);
            $table->string("respuesta_2",300);
            $table->string("clave",255);
            $table->date("fecha_nacimiento");
            $table->date("fecha_ingreso");
            $table->integer("sexo_trabajador");
            $table->integer("estado_trabajador");
            $table->unsignedBigInteger("id_tipo_personal");
            $table->foreign("id_tipo_personal")->references("id_tipo_personal")->on("tipo_personal")->cascadeOnUpdate()->cascadeOnDelete();
            $table->unsignedBigInteger("id_perfil");
            $table->foreign("id_perfil")->references("id_perfil")->on("perfil")->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trabajador', function (Blueprint $table) {
            //
        });
    }
}
