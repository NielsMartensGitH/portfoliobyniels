import React from "react";
import Calculator from "./calculator/Calculator";
import Clock from "./Clock/Clock";
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import NavBar from "./NavBar";

function App(){
    return(
        <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Calculator" component={Calculator} />
            <Route exact path="/Clock" component={Clock} />

        </div>
    )
}

export default App;