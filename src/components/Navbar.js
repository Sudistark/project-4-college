import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    //console.log(props);
    // setTimeout(()=> {
    //     props.history.push('/about.html');
    // },5000)
    return(
        <nav className="nav-wrapper red darken-4">
            <div className="container">
                <a className="brand-logo">Poke's Todo App</a>
                <ul className="right">
                    
                    <li><Link  to="/">Home</Link></li>
                    <li><NavLink to="/about.html">About Us</NavLink></li>
                    {/*Replace andchor href with link to avoid loading the index page everytime switching between componenets*/}
                    {/*It's similar to e.preventDefault */}
                </ul>
             </div>
        </nav>

    )
}


export default withRouter(Navbar);