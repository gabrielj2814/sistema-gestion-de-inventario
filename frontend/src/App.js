import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import InicioDashboard from "./componentes/inicioDashboard";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Switch>
        
          <Route exact path="/dashboard/inicio" component={InicioDashboard}/>
        
        </Switch>
      
      </Router>

    </div>
  );
}

export default App;
