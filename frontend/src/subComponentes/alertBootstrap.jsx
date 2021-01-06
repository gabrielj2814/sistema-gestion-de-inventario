import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AlertBootstrap = props => {

    return (

        <>
            <div class={"alert alert-"+((props.colorAlert))+" alert-dismissible fade show"} role="alert">
                {props.mensaje}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.onCerrarAlerta}></button>
            </div>
        
        </>

    )
}

export default AlertBootstrap

