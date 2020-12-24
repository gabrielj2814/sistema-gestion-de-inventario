<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TipoPersonal extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_personal', function (Blueprint $table) {
            //
            $table->bigIncrements("id_tipo_personal");
            $table->string("nombre_tipo_personal",150)->nullable();
            $table->integer("estado_tipo_personal")->nullable();
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
        Schema::dropIfExists('tipo_personal');
        // Schema::table('tipo_personal', function (Blueprint $table) {
        //     //
        // });
    }
}
