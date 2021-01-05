import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import InicioDashboard from "./componentes/inicioDashboard";
// LOGIN
import Login from "./componentes/login";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Switch>

          <Route exact path="/" component={Login}/>
          <Route exact path="/dashboard/inicio" component={InicioDashboard}/>
        
        </Switch>
      
      </Router>

    </div>
  );
}

export default App;
