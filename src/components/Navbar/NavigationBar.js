import React, { Component } from 'react';
import { items } from "./Items";
import style from './NavigationBar.css';
import {Link} from 'react-scroll';
import {HeroBg, VideoBg} from "../HeroSection/HeroElements";
import video1 from "../../videos/video1.mp4";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavigationBar extends Component{
    render() {

        return(


            <nav className="NavigationBarItems">
                <Link className="NavigationBar-Logo" to="DNT" smooth={true} duration={1000}>Dynamic Network
                </Link>
            <VideoBg id="NavLogo" autoPlay loop muted src={video1} type='video/mp4'/>
                <div className="Menu">
                </div>
                <ul className="nav-items">
                    {items.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.name} to={item.url} smooth={true} duration={1000}>
                                    {item.title}
                                </Link>
                            </li>
                        )

                    })}
                    <NavDropdown className="nav-links" title="Docs" id="collapsible-nav-dropdown">
                        <NavDropdown.Item id="DropItem" className="nav-links" to="about" smooth={true} duration={1000}>Whitepaper</NavDropdown.Item>
                        <NavDropdown.Divider id="NavDropdown.Divider"></NavDropdown.Divider>
                        <NavDropdown.Item id="DropItem" className="nav-links" href="https://github.com/Maraboue">Github</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Item id="DropItem" className="nav-links" href="https://docs.google.com/document/d/1JGdcARLhOjXBEiQi_Wouis79YNzDebjNus4H8shoEJU/edit">Något mer</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item id="DropItem" className="nav-links" href="#action/3.4">yolo</NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;