import React from "react";

import "../css/login.css"
// imagenes login
import imagenLogin1 from "../galeria/recursos/imagenes-login/1.jpg";
// login login 
import logo from "../galeria/recursos/imagenes-login/logo/4.jpg"

class Login extends React.Component {


    constructor(){
        super()
        this.cambiarEstado=this.cambiarEstado.bind(this)
        this.state={
            cedula:"",
            clave:""
        }
    }

    cambiarEstado(a){
        let input = a.target
        this.setState({[input.name]:input.value})
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

                    <form id="formularioLogin" className="formularioLogin" >

                        <div className="contendorInput">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill iconInputLogin" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <input type="text" className="inputLogin" id="cedula" name="cedula" placeholder="User" value={this.state.cedula} onChange={this.cambiarEstado}/>
                        </div>

                        <div className="contendorInput">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key iconInputLogin" viewBox="0 0 16 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            <input type="text" className="inputLogin" id="clave" name="clave" placeholder="Password" value={this.state.clave} onChange={this.cambiarEstado}/>
                        </div>
                        <input type="button" className="botonIniciarSesion" value="Iniciar Sesion"/> 
                    </form>

                    <div className="contendorLink">

                    <a href="#" className="linkCustom link-left">Recuperar Cuenta</a>
                    <a href="#" className="linkCustom link-right">Registrase</a>
                    
                    
                    </div>




                </div>

            </div>

        )
    }

}

export default Login