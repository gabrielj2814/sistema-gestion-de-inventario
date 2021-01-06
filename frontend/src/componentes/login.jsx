import React from "react";
// librerias JS
import axios from "axios"
// css
import "../css/login.css"
// imagenes login
import imagenLogin1 from "../galeria/recursos/imagenes-login/1.jpg";
// login login 
import logo from "../galeria/recursos/imagenes-login/logo/4.jpg"
// sub componentes
import AlertBootstrap from "../subComponentes/alertBootstrap"
// git loading
import gitLoading from "../galeria/recursos/gif-loading/6.gif";

class Login extends React.Component {

    constructor(){
        super()
        this.iniciarSesion=this.iniciarSesion.bind(this)
        this.cambiarEstado=this.cambiarEstado.bind(this)
        this.cerrarAlerta=this.cerrarAlerta.bind(this)
        this.state={
            cedula:"",
            clave:"",
            alerta:{
                color:null,
                mensaje:null,
                estado:false
            }
        }
    }

    cambiarEstado(a){
        let input = a.target
        this.setState({[input.name]:input.value})
    }

    async iniciarSesion(){
        this.cerrarAlerta()
        let estadoCedula=this.validarCedula();
        let estadoClave=this.validarClave();
        if(estadoCedula && estadoClave){
            document.querySelector(".contendorFlexGif").style.display="flex"
            let datosFormulario=new FormData(document.getElementById("formularioLogin"));
            let formDataParse=this.extrarDatosDelFormData(datosFormulario)
            let datos={
                trabajador:formDataParse
            }
            console.log(datos)
            setTimeout(() => {
                document.querySelector(".contendorFlexGif").style.display="none"
            },10000)
            // await axios.get("http://127.0.0.1:8000/login/iniciar",datos)
            // .then(respuesta => {
            //     let json=JSON.parse(respuesta.data)
            //     console.log(json)
           
            // })
            // .catch(error => {
            //     document.querySelector(".contendorFlexGif").style.display="none"
            //     this.abrirAlerta("Error al conectar con el servidor ,por favor verfique su conexion a internet","danger")
            // })
            
        }
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

    cerrarAlerta(){
        let alerta=JSON.parse(JSON.stringify(this.state.alerta))
        alerta.estado=false;
        this.setState({alerta})
    }

    abrirAlerta(mensaje,color){
        let alerta=JSON.parse(JSON.stringify(this.state.alerta))
        alerta.estado=true;
        alerta.mensaje=mensaje
        alerta.color=color
        this.setState({alerta})
    }

    validarCedula(){
        let cedula=document.getElementById("cedula").value;
        let exprexionRegular1=/\s/g
        let exprexionRegular2=/[a-zA-Z]/g
        let estado=false
        if(cedula!==""){
            if(!exprexionRegular2.test(cedula) || /root/g.test(cedula)){

                if(!exprexionRegular1.test(cedula)){
                    estado=true
                    document.getElementById("contendorCedula").style.marginBottom="15px";
                    document.getElementById("mensajeCedula").style.display="none";
                }
                else{
                    document.getElementById("contendorCedula").style.marginBottom="0";
                    document.getElementById("mensajeCedula").textContent="Error: los espacios en blanco no son validos"
                    document.getElementById("mensajeCedula").style.display="block";
                }
            }
            else{
                document.getElementById("contendorCedula").style.marginBottom="0";
                document.getElementById("mensajeCedula").textContent="Error: solo se aceptan valores numericos"
                document.getElementById("mensajeCedula").style.display="block";
            }
        }
        else{
            document.getElementById("contendorCedula").style.marginBottom="0";
            document.getElementById("mensajeCedula").textContent="Error: el campo no puede estar vacio"
            document.getElementById("mensajeCedula").style.display="block";
        }
        return estado;

    }

    validarClave(){
        let clave=document.getElementById("clave").value;
        let estado=false
        if(clave!==""){
            estado=true
            document.getElementById("contenedorClave").style.marginBottom="15px"
            document.getElementById("mensajeClave").style.display="none";
        }
        else{
            document.getElementById("contenedorClave").style.marginBottom="0"
            document.getElementById("mensajeClave").textContent="Error: el campo no puede estar vacio"
            document.getElementById("mensajeClave").style.display="block";
        }
        return estado;

    }

    render(){
        return(
            <div className="contenedorComponenteLogin">

                <div className="contenedoreImagenes">
                    <img src={imagenLogin1} className="imgLogin" id="imgBodegon"  alt="imagen bodegon"/>
                    <div className="protector"></div>
                </div>
                <div className="contenedorLogin">
                    
                    <div className="contendorLogoSoftware">
                        <img src={logo} class="imagenLogoSoftware" id="imagenLogoSoftware"  alt="logo software"/>
                    </div>
                    <h1 className="nombreSoftware">MyGroceryStore</h1>

                    { this.state.alerta.estado &&
                        (<div class="contendorAlertaLogin">
                        
                            <AlertBootstrap colorAlert={this.state.alerta.color} mensaje={this.state.alerta.mensaje} onCerrarAlerta={this.cerrarAlerta}/>
                            
                        </div>)
                    }

                    <form id="formularioLogin" className="formularioLogin" >
                        <div className="contendorInput" id="contendorCedula">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill iconInputLogin" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <input type="text" className="inputLogin" id="cedula" name="cedula" placeholder="User" value={this.state.cedula} onChange={this.cambiarEstado}/>
                        </div>

                        <div className="mensajeLogin" id="mensajeCedula"></div>

                        <div className="contendorInput" id="contenedorClave">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key iconInputLogin" viewBox="0 0 16 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            <input type="password" className="inputLogin" id="clave" name="clave" placeholder="Password" value={this.state.clave} onChange={this.cambiarEstado}/>
                        </div>
                        <div className="mensajeLogin" id="mensajeClave"></div>
                        <input type="button" className="botonIniciarSesion" value="Iniciar Sesion" onClick={this.iniciarSesion}/> 
                    </form>

                    <div className="contendorLink">

                    <a href="#" className="linkCustom link-left">Recuperar Cuenta</a>
                    <a href="#" className="linkCustom link-right">Registrase</a>
                    
                    
                    </div>

                </div>

                
                <div className="contendorFlexGif">
                    <div className="contedorGifCargaLogin">
                        <img src={gitLoading} className="contedorGifCargaLogin gifCarga" alt="gif de carga"/>
                    </div>
                </div>
                

            </div>

        )
    }

}

export default Login