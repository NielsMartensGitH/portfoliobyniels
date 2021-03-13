import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="row justify-content-md-center">
            <li className="col col-md-auto"><Link to="/">Home</Link></li>
            <li className="col col-md-auto"><Link to="/Calculator">Calculator</Link></li>
            <li className="col col-md-auto"><Link to="/Clock">25+5 Clock</Link></li>
        </ul>
        </div>
    )
}

export default NavBar; 