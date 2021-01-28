import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    .navbar { 
        background-color: #000;
    }

    .navbar-brand, .navbar-nav, .nav-item, .nav-link {
        color: gray;

        &:hover {
            color: white;
        }
    }
`;

const NavigationBar = () => (
    <StyledNavbar>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Musician Creator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="testes"><Nav.Link href="/">Create</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">Update/Delete</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </StyledNavbar>

    
);

export default NavigationBar;