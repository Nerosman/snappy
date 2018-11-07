import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ShipInfoComponent} from "./components/ShipInfoComponent";
import {MainComponent} from "./components/MainComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <MainComponent className="App">
                    <Switch>
                        <Route path="/ship-info" component={ShipInfoComponent}/>
                    </Switch>
                </MainComponent>
            </Router>
        );
    }
}

export default App;
