import React from "react";
import {withRouter} from "react-router-dom"

import "../css/dashboard.css";

import $ from "jquery";

import BarraSuperiorSitema from "./barraSuperiorSistema";
import MenuDashBoard from "./menuDashboard";


class Dashboard extends React.Component {

    constructor(){
        super()
        this.menuBar=this.menuBar.bind(this)
        this.state={

            estadoMenuBar:false,
            nombreTrabajador:""

        }

    }

    menuBar(){
        this.setState({estadoMenuBar:!this.state.estadoMenuBar})
        const contendorModulo=document.querySelector(".contendorModulo")
        if(!this.state.estadoMenuBar){
            contendorModulo.style.width="95%"
        }
        else{
            
            contendorModulo.style.width="100%"
        }
        // alert("hola")
    }
    
    componentDidMount(){
        const contendorModulo=document.querySelector(".contendorModulo")
        contendorModulo.style.width="100%"
    }

    componentWillMount(){
        if(localStorage.getItem("token")!=null){
            $.ajax({
                url:"http://127.0.0.1:8000/login/verificar-token",
                data:{token:localStorage.getItem("token")},
                dataType:"json",
                type:"GET",
                success:(respuesta) => {
                    if(!respuesta.token.estado_token_vencimiento){
                        this.setState({nombreTrabajador:respuesta.token.nombre})
                    }
                    else{
                        const json={
                            alerta:{
                                color:"warning",
                                mensaje:"El token de sesion esta caducado, por favor inicia sesion otra vez para craer una nueva sesion",
                            }
                        }
                        this.props.history.push(`/${JSON.stringify(json)}`)
                    }
                },
                error: (error) => {
                    const json={
                        alerta:{
                            color:"danger",
                            mensaje:"Error al conectar con el servidor ,por favor verfique su conexion a internet",
                        }
                    }
                    this.props.history.push(`/${JSON.stringify(json)}`)
                }
            })
        }
        else{
            const json={
                alerta:{
                    color:"danger",
                    mensaje:"El token de sesion no exite",
                }
            }
            this.props.history.push(`/${JSON.stringify(json)}`)
        }
    }

    render(){
        return(
            <div className="componenteDashboard">
                <BarraSuperiorSitema nombreTrabajador={this.state.nombreTrabajador} eventoMenuBar={this.menuBar}/>
                <MenuDashBoard estadoMenuBar={this.state.estadoMenuBar}/>
                <div className="contendorModulo">
                    {this.props.component}
                </div>
            </div>
        )
    }

}

export default withRouter(Dashboard);