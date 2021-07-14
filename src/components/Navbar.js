import React from 'react'
import styled from 'styled-components'
import logo from '../images/shoppable-logo.svg'
import Home from "./Home"
import Store from "./Store"
import CustomerCare from "./CustomerCare"
import Sell from "./Sell"
import ContactUs from "./ContactUs"
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Link,
} from 'react-router-dom'

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;
    align-items: center;
    background-color: #DA0037;
    height: 2.5rem;
    width: 100%;
`
const Logo = styled.div`
    img {
        width: 40px;
    }
`
const Nav = styled.ul`
    display: flex;
`
const List = styled.li`
    list-style-type: none;
    margin: 0 1rem;
    a {
        text-decoration: none;
        color: #EDEDED;
        font-size: .8rem;
        padding-right: 1rem;
    }


`


const Navbar = () => {
    return (
        <Router>
            <NavBar>
            <Logo>
                <a href="/#Logo">
                    <img src={logo} alt="Shoppable Logo"/>
                </a>
            </Logo>
            <Nav>
                <List>
                    <Link to="/">HOME</Link>
                </List>
                <List>
                    <Link to="/store">STORE</Link>
                </List>
                <List>
                    <Link to="/customer-care">CUSTOMER CARE</Link>
                </List>
                <List>
                    <Link to="/sell">SELL</Link>
                </List>
                <List>
                    <Link to="/contact-us">CONTACT US</Link>
                </List>
            </Nav>
            </NavBar>

            <Switch>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/sell">
                    <Sell/>
                </Route>
                <Route path="/customer-care">
                    <CustomerCare/>
                </Route>
                <Route path="/store">
                    <Store/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar
