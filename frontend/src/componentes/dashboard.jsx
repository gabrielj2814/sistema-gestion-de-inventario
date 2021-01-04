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
        // alert("hola")
    }

    render(){
        return(

            <div className="componenteDashboard">
                <BarraSuperiorSitema eventoMenuBar={this.menuBar}/>
                <MenuDashBoard estadoMenuBar={this.state.estadoMenuBar}/>
            </div>

        )
    }

}

export default Dashboard;