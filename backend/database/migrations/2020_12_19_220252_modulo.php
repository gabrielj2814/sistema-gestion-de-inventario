<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Modulo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modulo', function (Blueprint $table) {
            $table->bigIncrements("id_modulo");
            $table->string("modulo",250)->nullable();
            $table->string("sub_modulo",250)->nullable();
            $table->unsignedBigInteger("id_perfil");
            $table->foreign("id_perfil")->references("id_perfil")->on("perfil")->cascadeOnDelete()->cascadeOnUpdate();  
            $table->timestamps();          // $table->foreignId("id_perfil")
            // ->constrained("perfil")
            // ->cascadeOnUpdate()
            // ->cascadeOnDelete();
            // $table->foreign("id_perfil")->references("perfil")->on("id_perfil");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("modulo");
        // Schema::table('modulo', function (Blueprint $table) {
        //     //
        // });
    }
}
