import React, { Component } from 'react';
import './App.css';
import FirstCarPage from './Components/FirstCarPage';
import data from './Components/cars.json';
// import {Route, IndexRoute} from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarRegForm from './Components/Form';
import CarList from './Components/CarList';
import Register from './Components/Register';
class App extends Component {
   

    render() {
        
        return (
            <div>
                <React.Fragment>
                    <Router>
                        <Route path="/form" exact component={CarRegForm}/>
                        <Route path="/home" component={CarList}/>
                        <Route path="/seeDetail" render={(props) => <Register {...props}  />}/>
                    </Router>
                </React.Fragment>
             </div>
        );
    }
}

export default App;
