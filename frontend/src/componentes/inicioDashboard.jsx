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
        let modulo=(
            <div>
                <h1>inicio dashboard</h1>
            </div>
        )

        return (

            <div className="componenteInicioDashboard">
                <Dashboard component={modulo} />
            </div>

        )
    }



}

export default InicioDashboard