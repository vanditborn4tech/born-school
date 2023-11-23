import { Component } from "react";
import "./navbarstyle.css";

import { MenuItems } from "./menu";
import {Link,   } from "react-router-dom";

class Navbar extends Component{

  
    state={clicked : false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo"> <img src="src/images/Picsart_23-11-18_14-36-09-132.png" alt="hero" className="navimg" /> </div>
               
                <div className="menu-icons" onClick={this.handleClick}>
                   
                    <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>


                </div>
                <ul className={this.state.clicked?
                "nav-menu active":"nav-menu"}>
                    {
                        MenuItems.map((item,index)=>{
                            return(
                                <li key={index}>
                        <Link to={item.url} className={item.cName}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                            )
                        })
                    }
             <Link to="/signin">       <button className="signinop"  >Sign In</button></Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;