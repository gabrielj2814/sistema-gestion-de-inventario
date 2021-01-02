import React from "react";
import "../css/barraSuperiorSistema.css";


class BarraSuperiorSistema extends React.Component {

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (
            <div className="contenedorBarra">
                <div className="contenedor_icon_menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list medidas_icon_menu" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>

                <div className="contenedor_vista_perfil">

                    <div className="contenedor_foto"></div>
                    <div className="contenedor_nombre_user">nombre usuario</div>
                    <div className="contenedor_icon_arrow_down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down medidas_icon_arrow_down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </div>

                    
                
                </div>
            
            </div>
        )
    }

}

export default BarraSuperiorSistema;