import React from "react";

import "../css/dashboard.css";

import BarraSuperiorSitema from "./barraSuperiorSistema";
import MenuDashBoard from "./menuDashboard";


class Dashboard extends React.Component {

    constructor(){
        super()
        this.menuBar=this.menuBar.bind(this)
        this.state={

            estadoMenuBar:false

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

    render(){
        return(

            <div className="componenteDashboard">
                <BarraSuperiorSitema eventoMenuBar={this.menuBar}/>
                <MenuDashBoard estadoMenuBar={this.state.estadoMenuBar}/>
                <div className="contendorModulo">
                    {this.props.component}
                </div>
            </div>

        )
    }

}

export default Dashboard;