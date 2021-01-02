import React from "react";

import "../css/dashboard.css";

import BarraSuperiorSitema from "./barraSuperiorSistema";
import MenuDashBoard from "./menuDashboard";


class Dashboard extends React.Component {

    constructor(){
        super()
        this.state={

        }

    }

    render(){
        return(

            <div className="componenteDashboard">
                <BarraSuperiorSitema/>
                <MenuDashBoard/>
            </div>

        )
    }

}

export default Dashboard;