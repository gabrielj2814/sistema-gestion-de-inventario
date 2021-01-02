import React from "react";

import Dashboard from "./dashboard";

import "../css/inicioDashboard.css"



class InicioDashboard extends React.Component {

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (

            <div className="componenteInicioDashboard">
                <Dashboard />
            
            </div>

        )
    }



}

export default InicioDashboard