import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {ShipInfoComponent} from "./components/ShipInfoComponent";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route path="/ship-info" component={ShipInfoComponent}/>
            </div>
        </Router>
    );
  }
}

export default App;
