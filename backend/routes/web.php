<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers;
// use App\Http\Controllers\PerfilController;

// use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return "hola mundo con laravel";
});

// Route::get('/registrar', 'PerfilController@index');

// grupo configuracion
Route::group(["prefix" => "/configuracion"], function() {
    // grupo perfil
    Route::group(['prefix' => '/perfil'], function () {
        Route::get('/registrar', [App\Http\Controllers\PerfilController::class,"registrar"]);
        Route::get("/consultar/todos",[\App\Http\Controllers\PerfilController::class,"consultarTodos"]);
        Route::get("/consultar/id/{id}",[\App\Http\Controllers\PerfilController::class,"consultarPerfilId"]);
        Route::get("/consultar/nombre/{nombre}",[App\Http\Controllers\PerfilController::class,"consultarPerfilNombre"]);
        Route::get("/eliminar/{id}",[App\Http\Controllers\PerfilController::class,"eliminarPerfil"]);
        Route::get("/actualizar/{id}",[App\Http\Controllers\PerfilController::class,"actualizarPerfil"]);
    });
    // grupo tipo personal 
    Route::group(['prefix' => '/tipo-personal'], function () {
        
        Route::get("/registrar",[App\Http\Controllers\tipoPersonalController::class,"registrar"]);
        Route::get("consultar/todos",[App\Http\Controllers\tipoPersonalController::class,"consultarTodos"]);

    });
});

