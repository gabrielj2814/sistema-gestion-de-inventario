import React from "react"
import {withRouter} from "react-router-dom"
// librerias js
import $ from "jquery"
// css
import "../css/registrar.css"

import gitLoading from "../galeria/recursos/gif-loading/6.gif";

class Registrar extends React.Component{

    constructor(){
        super()
        this.siguiente=this.siguiente.bind(this)
        this.verificarUltimoPaso=this.verificarUltimoPaso.bind(this)
        this.atrar=this.atrar.bind(this)
        this.irHaLogin=this.irHaLogin.bind(this)
        this.state={
            estadoFormulario:1,
            preguntas:[
                "Color favorito",
                "Serie favorita",
                "Personaje favorito",
                "Comida favorita",
                "Nombre de tu primer hijo",
                "Nombre de tu primera hija",
                "Nombre de tu primera mascota"
            ],
            pregunta1:"",
            pregunta2:""

        }
    }

    siguiente(a){
        let boton=a.target
        // alert(boton.id)
        switch(boton.id){
            case "2": this.mostrarPasoDos();break;
            case "3": this.mostrarPasoTres();break;
            default :alert("default");break;

        }
    }

    atrar(a){
        let boton=a.target
        let numeroPaso=boton.id.split("-")[1]
        switch(numeroPaso){
            case "1":
                $(".paso2").hide(500)
                $(".paso1").show(500)
            ;break;
            case "2":
                $(".paso3").hide(500)
                $(".paso2").show(500)
            ;break;
            default:alert("error al ir atras");break;
        }

    }

    mostrarPasoDos(){
        // alert("validando el paso 1 para ver si puede ir al paso dos")
        let $marcadorPaso1=document.getElementById("marcadorPaso1")
        if(this.validarCedula()){
            $marcadorPaso1.classList.remove("contadorPasosInactivo")
            $marcadorPaso1.classList.add("contadorPasosActivo")
            $(".paso1").hide(500)
            $(".paso2").show(500)
        }
        else{
            $marcadorPaso1.classList.remove("contadorPasosActivo")
            $marcadorPaso1.classList.add("contadorPasosInactivo")
        }
    }

    validarCedula(){
        let cedula=document.getElementById("cedula_trabajador").value;
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

    mostrarPasoTres(){
        let $marcadorPaso2=document.getElementById("marcadorPaso2")
        if(this.validarPaso2()){
            $marcadorPaso2.classList.remove("contadorPasosInactivo")
            $marcadorPaso2.classList.add("contadorPasosActivo")
            $(".paso2").hide(500)
            $(".paso3").show(500)
        }
        else{
            $marcadorPaso2.classList.remove("contadorPasosActivo")
            $marcadorPaso2.classList.add("contadorPasosInactivo")
        }

    }

    validarPaso2(){
        let estadoRespuesta1=this.validarCampoRespuesta("respuesta_1");
        let estadoRespuesta2=this.validarCampoRespuesta("respuesta_2");
        return (estadoRespuesta1 && estadoRespuesta2)? true : false
    }

    validarCampoRespuesta(respuesta){
        let estado =false
        let $campoRespuesta=document.getElementById(respuesta)
        // let exprexionRegular1=/\s/g
        let exprexionRegular2=/[a-zA-Z]|[0-9]/g
        let idMensaje=$campoRespuesta.id
        let mensaje=document.getElementById("mensaje-"+idMensaje)
        if(exprexionRegular2.test($campoRespuesta.value)){
            estado=true
            mensaje.style.display="none"
        }
        else{
            mensaje.style.display="block"
            mensaje.textContent="Error el campo no puede estar vacio"
        }
        return estado
    }

    verificarUltimoPaso(){
        let $marcadorPaso3=document.getElementById("marcadorPaso3")
        if(this.validarPaso3()){
            $marcadorPaso3.classList.remove("contadorPasosInactivo")
            $marcadorPaso3.classList.add("contadorPasosActivo")
            this.activarCuenta()
        }
        else{
            $marcadorPaso3.classList.remove("contadorPasosActivo")
            $marcadorPaso3.classList.add("contadorPasosInactivo")
        }
    }

    validarPaso3(){
        let $mensajeClaveVerificar=document.getElementById("mensaje-clave-verificar")
        let estadoClave=this.validarClave("clave")
        let estadoClaveVerificar=this.validarClave("clave-verificar")
        if(estadoClave && estadoClaveVerificar){
            let clave=document.getElementById("clave").value
            let claveVerificar=document.getElementById("clave-verificar").value
            if(claveVerificar===clave){
                $mensajeClaveVerificar.style.display="none"
                return true
            }
            else{
                $mensajeClaveVerificar.style.display="block"
                $mensajeClaveVerificar.textContent="Error: las claves no coinciden"
                return false
            }
        }
        else{
            return false
        }
    }

    validarClave(clave){
        let estado =false
        let $campoClave=document.getElementById(clave)
        // let exprexionRegular1=/\s/g
        let exprexionRegular2=/[a-zA-Z]|[0-9]/g
        let idMensaje=$campoClave.id
        let mensaje=document.getElementById("mensaje-"+idMensaje)
        if(exprexionRegular2.test($campoClave.value)){
            estado=true
            mensaje.style.display="none"
        }
        else{
            mensaje.style.display="block"
            mensaje.textContent="Error el campo no puede estar vacio"
        }
        return estado
    }

    activarCuenta(){
        document.querySelector(".contendorFlexGifRegistro").style.display="inline-flex"
        let datosFormulario=new FormData(document.getElementById("formularioRegistro"));
        let formDataParse=this.extrarDatosDelFormData(datosFormulario)
        let datos={
            trabajador:formDataParse
        }
        $.ajax({
            url:"http://127.0.0.1:8000/configuracion/trabajador/activar-cuenta",
            type:"GET",
            dataType:"json",
            data:datos,
            success: (respuesta) => {
                document.querySelector(".contendorFlexGifRegistro").style.display="none"
                let json=JSON.parse(JSON.stringify(respuesta))
                // console.log("->>> ",json)
                if(json.estado===true){
                    const alertJson={
                        alerta:{
                            color:"success",
                            mensaje:json.msj
                        }
                    }
                    this.props.history.push(`/${JSON.stringify(alertJson)}`)
                }
                else{
                    const alertJson={
                        alerta:{
                            color:"warning",
                            mensaje:json.msj,
                        }
                    }
                    this.props.history.push(`/${JSON.stringify(alertJson)}`)
                }
            },
            error: (error) => {
                // console.error("->>> ",error)
                document.querySelector(".contendorFlexGifRegistro").style.display="none"
                const alertJson={
                    alerta:{
                        color:"danger",
                        mensaje:"Error al conectar con el servidor ,por favor verfique su conexion a internet",
                    }
                }
                this.props.history.push(`/${JSON.stringify(alertJson)}`)
            }
            
            
        })

    }

    extrarDatosDelFormData(formData){
        let json={}
        let iterador = formData.entries()
        let next= iterador.next();
        while(!next.done){
            json[next.value[0]]=next.value[1]
            next=iterador.next()
        }
        return json   
    }

    irHaLogin(){
        this.props.history.push("/")
    }


    render(){
        return(

            <div className="contendorRegistro">

                <div className="contendorArrowGoBack" onClick={this.irHaLogin}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle iconArrowGoBack" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </div>

                <div className="contendorFlexGifRegistro">
                    <div className="contedorGifCargaRegistro">
                        <img src={gitLoading} className="gifCargaRegistro" alt="gif de carga"/>
                    </div>
                </div>

                <div className="contenedorPasosIndicador">
                    <div className="contadorPasos contadorPasosInactivo " id="marcadorPaso1">1</div>
                    <div className="contadorPasos contadorPasosInactivo contadorPasosCentral" id="marcadorPaso2">2</div>
                    <div className="contadorPasos contadorPasosInactivo" id="marcadorPaso3">3</div>
                </div>

                <form id="formularioRegistro" className="contendorFormRegistro">

                    <div className="paso1">
                        <div className="tituloPaso1">Paso 1: Por favor ingrese su cedula de identida</div>

                        <input type="text" className="inputRegistro" id="cedula_trabajador" name="cedula_trabajador" placeholder="Cedula"/>
                        <div className="mensajeRegistro" id="mensajeCedula"></div>
                        <div className="contenedorBotonesPaso1">

                        <input type="button" className="botonInicioSiguiente" id="2" value="Siguiente" onClick={this.siguiente}/>

                        </div>
                    </div>

                    <div className="paso2">
                        <div className="tituloPaso2">Paso 2: seleciones dos preguntas de seguridad y ingrese su respectiva respuesta</div>

                        <div className="contenedorTituloPregunta" >Pregunta 1</div>
                        <select className="inputRegistro selectInputMarginBottom" id="pregunta_1" name="pregunta_1">
                            {this.state.preguntas.map((pergunta,index) =>{
                                    return (<option key={"pregunta-1-"+index} value={index}>{pergunta}</option>)
                                })

                            }
                        </select>
                        <input type="text" className="inputRegistro" id="respuesta_1" name="respuesta_1" placeholder="Respuesta de la pregunta 1"/>
                        <div className="mensajeRegistro" id="mensaje-respuesta_1"></div>

                        <div className="contenedorTituloPregunta" >Pregunta 2</div>
                        <select className="inputRegistro selectInputMarginBottom" id="pregunta_2" name="pregunta_2">
                            {this.state.preguntas.map((pergunta,index) =>{
                                    return (<option key={"pregunta-2-"+index} value={index}>{pergunta}</option>)
                                })

                            }
                        </select>
                        <input type="text" className="inputRegistro" id="respuesta_2" name="respuesta_2" placeholder="Respuesta de la pregunta 2"/>
                        <div className="mensajeRegistro" id="mensaje-respuesta_2"></div>
                        <div className="contenedorBotonesPaso">
                        
                            <input type="button" className="botonPasoAtras ancho30" id="atras-1" value="Atras" onClick={this.atrar}/>
                            <input type="button" className="botonPasoSiguiente ancho30" id="3" value="Siguiente" onClick={this.siguiente}/>

                        </div>
                    </div>

                    <div className="paso3">
                        <div className="tituloPaso3">Paso 3: ingrese su contraseña</div>
                        <input type="password" className="inputRegistro inputRegistroMargenTop30" id="clave" name="clave" placeholder="Ingrese su clave"/>
                        <div className="mensajeRegistro" id="mensaje-clave"></div>
                        <input type="password" className="inputRegistro inputRegistroMargenTop30" id="clave-verificar" name="clave-verificar" placeholder="Ingrese la clave otra vez para verifcar"/>
                        <div className="mensajeRegistro" id="mensaje-clave-verificar"></div>
                        <div className="contenedorBotonesPaso">
                        
                            <input type="button" className="botonPasoAtras ancho30" id="atras-2" value="Atras" onClick={this.atrar}/>
                            <input type="button" className="botonPasoSiguiente ancho30" value="Enviar" onClick={this.verificarUltimoPaso}/>

                        </div>
                    </div>
                    
                
                
                </form>

            </div>


        )
    }

}

export default withRouter(Registrar)