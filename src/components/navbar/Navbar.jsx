import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {


    // The debounce function receives our function as a parameter
    const debounce = (fn) => {

        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame;

        // The debounce function returns a new function that can receive a variable number of arguments
        return (...params) => {

            // If the frame variable has been defined, clear it now, and queue for next frame
            if (frame) {
                cancelAnimationFrame(frame);
            }

            // Queue our function call for the next frame
            frame = requestAnimationFrame(() => {

                // Call our function and pass any params we received
                fn(...params);
            });

        }
    };


    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();



    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
    return (<div className='navbar-container'>
        <Navbar className={`navbar navbar-expand-lg navbar-light  navDefault`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
                    <div className="brnIcon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title={"Products"} id="basic-nav-dropdown">
                            <NavDropdown.Item href="products/cups">Cups</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="products/containers">Containers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="products/covers">Covers</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Item>
                            <Nav.Link href="#testimonial" className="nav-link">Reviews</Nav.Link>
                        </Nav.Item> */}
                        <NavDropdown title={"Quality"} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/gmp">GMP</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ghp">GHP</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/haccp">HACCP</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/iso2200">
                                iso 2200
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/iso14001">
                                iso 14001
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="/#aboutus" className="nav-link">Food Safe Packaging</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/#aboutus" className="nav-link">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/#contact' className="nav-link">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='Line' />
    </div>);
};

export default NavBar;