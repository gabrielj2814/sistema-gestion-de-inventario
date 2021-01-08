import React from "react"
import {withRouter} from "react-router-dom"
// librerias js
import $ from "jquery"
// css
import "../css/registrar.css"

class Registrar extends React.Component{

    constructor(){
        super()
        this.siguiente=this.siguiente.bind(this)
        this.state={
            estadoFormulario:1,
            preguntas:[]

        }
    }

    siguiente(a){
        let boton=a.target
        // alert(boton.id)
        switch(boton.id){
            case "2": this.mostrarPasoDos();break;
            case "3": alert(3);break;
            default :alert("default");break;

        }
    }

    mostrarPasoDos(){
        // alert("validando el paso 1 para ver si puede ir al paso dos")
        if(this.validarCedula()){
            let $marcadorPaso1=document.getElementById("marcadorPaso1")
            $marcadorPaso1.classList.remove("contadorPasosInactivo")
            $marcadorPaso1.classList.add("contadorPasosActivo")
            $(".paso1").hide(500)
            $(".paso2").show(500)
        }
    }

    // validarPasoUno(){

    // }

    // validaciones

    validarCedula(){
        let cedula=document.getElementById("cedula").value;
        let exprexionRegular1=/\s/g
        let exprexionRegular2=/[a-zA-Z]/g
        let estado=false
        if(cedula!==""){
            if(!exprexionRegular2.test(cedula)){

                if(!exprexionRegular1.test(cedula)){
                    estado=true
                    document.getElementById("mensajeCedula").style.display="none";
                }
                else{
                    document.getElementById("mensajeCedula").textContent="Error: los espacios en blanco no son validos"
                    document.getElementById("mensajeCedula").style.display="block";
                }
            }
            else{
                document.getElementById("mensajeCedula").textContent="Error: solo se aceptan valores numericos"
                document.getElementById("mensajeCedula").style.display="block";
            }
        }
        else{
            document.getElementById("mensajeCedula").textContent="Error: el campo no puede estar vacio"
            document.getElementById("mensajeCedula").style.display="block";
        }
        return estado;

    }

    render(){
        return(

            <div className="contendorRegistro">

                <div className="contenedorPasosIndicador">
                    <div className="contadorPasos contadorPasosInactivo " id="marcadorPaso1">1</div>
                    <div className="contadorPasos contadorPasosInactivo contadorPasosCentral" id="marcadorPaso2">2</div>
                    <div className="contadorPasos contadorPasosInactivo" id="marcadorPaso3">3</div>
                </div>

                <form id="formularioRegistro" className="contendorFormRegistro">

                    <div className="paso1">
                        <div className="tituloPaso1">Paso 1: Por favor ingrese su cedula de identida o DNo</div>

                        <input type="text" className="inputRegistro" id="cedula" name="cedula" placeholder="Cedula"/>
                        <div className="mensajeRegistro" id="mensajeCedula"></div>
                        <div className="contenedorBotonesPaso1">

                        <input type="button" className="botonInicioSoguiente" id="2" value="Siguiente" onClick={this.siguiente}/>

                        </div>
                    </div>

                    <div className="paso2">
                        <div className="tituloPaso1">Paso 2: seleciones dos preguntas de seguridad y ingrese su respectiva respuesta</div>

                        <input type="text" className="inputRegistro" id="cedula" name="cedula" placeholder="Cedula"/>
                        <div className="mensajeRegistro" id="mensajeCedula"></div>
                        <div className="contenedorBotonesPaso1">

                        <input type="button" className="botonInicioSoguiente" id="inicio" value="Siguiente"/>

                        </div>
                    </div>
                    
                
                
                </form>

            </div>


        )
    }

}

export default withRouter(Registrar)