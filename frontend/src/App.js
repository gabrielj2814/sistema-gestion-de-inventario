import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import InicioDashboard from "./componentes/inicioDashboard";
// LOGIN
import Login from "./componentes/login";
// registrar
import Registrar from "./componentes/registrar"

function App() {
  return (
    <div className="App">
      
      <Router>

        <Switch>

          <Route exact path="/:mensaje?" component={Login}/>
          <Route exact path="/registrar/cuenta" component={Registrar}/>
          <Route exact path="/dashboard/inicio" component={InicioDashboard}/>
        
        </Switch>
      
      </Router>

    </div>
  );
}

export default App;
