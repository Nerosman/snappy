import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ShipInfoComponent} from "./components/shipInfo/ShipInfoComponent";
import {MainComponent} from "./components/MainComponent";
import {AdminPanelComponent} from "./components/adminPanel/AdminPanelComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <MainComponent className="App">
                    <Switch>
                        <Route path="/ship-info" component={ShipInfoComponent}/>
                        <Route path="/admin-panel" component={AdminPanelComponent}/>
                    </Switch>
                </MainComponent>
            </Router>
        );
    }
}

export default App;
