import React from "react";

import "../css/menuDashboard.css"


class MenuDashboard extends React.Component {

    constructor(){

        super()
        this.subMenuBar=this.subMenuBar.bind(this);
        this.state={

            menu:{
                configuracion:false,
                inventario:false,
                reporte:false,
                seguridad:false,
                datos:false
            }
        }

    }

    subMenuBar(a){
        let menuEstado=JSON.parse(JSON.stringify(this.state.menu))
        let $menu=a.target
        let seccionMenu=null;
        if($menu.getAttribute("data-item-menu")===null){
            let $padre=$menu.parentNode;
            seccionMenu=$padre.getAttribute("data-item-menu")
        }
        else{
            seccionMenu=$menu.getAttribute("data-item-menu")
        }
        // alert(seccionMenu)
        menuEstado[seccionMenu]=!menuEstado[seccionMenu];
        for(let propiedad in menuEstado){
            if(propiedad!==seccionMenu){
                menuEstado[propiedad]=false
            }
        }
        this.setState({menu:menuEstado})
        
    }




    render(){
        return (
            <div className={"componentMenuDashboard "+((this.props.estadoMenuBar)?"":"componentMenuDashboard_false")} >

                <div className="item_menu_nvl_1"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house medidas_icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </div>
                <div className="item_menu_nvl_1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 medidas_icon" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </div>

                <div className="item_menu_nvl_1" data-item-menu="configuracion" onClick={this.subMenuBar}>
                    <svg  data-item-menu="configuracion" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear medidas_icon" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                    { (this.state.menu.configuracion===true) &&
                        (
                            <>
                            <div className="arrow-left-menu"></div>
                            <div className="contendor_sub_items">
                                <div className="item_sub_menu">Perfil</div>
                                <div className="item_sub_menu">Trabajador</div>
                                <div className="item_sub_menu">Tipo Personal</div>
                                <div className="item_sub_menu">Tipo Articulo</div>
                                <div className="item_sub_menu">Categoria</div>
                                <div className="item_sub_menu">Empresa</div>
                                <div className="item_sub_menu">Metodos de Pago</div>
                                <div className="item_sub_menu">Cliente</div>
                            </div>  
                            </>
                        )
                    }                  
                </div>

                <div className="item_menu_nvl_1" data-item-menu="inventario" onClick={this.subMenuBar}>
                    <svg data-item-menu="inventario" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-seam medidas_icon" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    { (this.state.menu.inventario===true) &&
                        (
                            <>
                            <div className="arrow-left-menu"></div>
                            <div className="contendor_sub_items">
                                <div className="item_sub_menu">Producto</div>
                                <div className="item_sub_menu">Inventario</div>
                                <div className="item_sub_menu">Retiro</div>
                                <div className="item_sub_menu">Asignar Precio</div>
                            </div>  
                            </>
                        )
                    }     
                    
                </div>
                <div className="item_menu_nvl_1" data-item-menu="reporte" onClick={this.subMenuBar}>
                    <svg data-item-menu="reporte" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-bar-graph medidas_icon" viewBox="0 0 16 16">
                        <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    { (this.state.menu.reporte===true) &&
                        (
                            <>
                            <div className="arrow-left-menu"></div>
                            <div className="contendor_sub_items">
                                <div className="item_sub_menu">Ventas</div>
                                <div className="item_sub_menu">Inventerio</div>
                                <div className="item_sub_menu">Factura</div>
                            </div>  
                            </>
                        )
                    }   
                </div>
                <div className="item_menu_nvl_1" data-item-menu="seguridad" onClick={this.subMenuBar}>
                    <svg data-item-menu="seguridad" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield medidas_icon" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                    </svg>
                    { (this.state.menu.seguridad===true) &&
                        (
                            <>
                            <div className="arrow-left-menu"></div>
                            <div className="contendor_sub_items">
                                <div className="item_sub_menu">Bitacora</div>
                            </div>  
                            </>
                        )
                    }  
                </div>
                <div className="item_menu_nvl_1" data-item-menu="datos" onClick={this.subMenuBar}>
                    <svg data-item-menu="datos" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-server medidas_icon" viewBox="0 0 16 16">
                        <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
                        <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79z"/>
                        <path d="M14.667 11.668c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
                    </svg>
                    { (this.state.menu.datos===true) &&
                        (
                            <>
                            <div className="arrow-left-menu"></div>
                            <div className="contendor_sub_items">
                                <div className="item_sub_menu">Exportar datos</div>
                                <div className="item_sub_menu">Importar Datos</div>
                            </div>  
                            </>
                        )
                    }   
                </div>
                
                
            
            </div>
        )

    }

}

export default MenuDashboard;