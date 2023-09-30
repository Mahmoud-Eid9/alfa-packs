import React, { useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom";
import parse from 'html-react-parser'
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import { Style } from '@mui/icons-material';

const NavBar = () => {
    
    const { t, i18n } = useTranslation()
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);  // initially closed
    const [alignment, setAlignment] = useState(i18n.language);


    const toggleMenu = () => {     // this handler is "regular"
        setMenuOpen(!menuOpen);    // open and close...
    };

    const closeMenu = () => {      // ... and this one only
        setMenuOpen(false);    // closes it ...
    };
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

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      i18n.changeLanguage(newAlignment)
    };


    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
    return (<div className='navbar-container'>
        <Navbar expanded={menuOpen} className={`navbar navbar-expand-lg navbar-light  navDefault`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
                    <div className="brnIcon" />

                </Navbar.Brand>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="en">English</ToggleButton>
                        <ToggleButton value="ar">عربي</ToggleButton>
                    </ToggleButtonGroup>
                {/* <Dropdown>


                    <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                        <PublicIcon fontSize='medium'></PublicIcon>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='lang-menu'>
                        <Dropdown.Item><div className="nav-drop" onClick={() => { i18n.changeLanguage("en") }}>EN</div></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item><div className="nav-drop" onClick={() => { i18n.changeLanguage("ar") }}>AR</div></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

                <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" dir={ i18n.language === "ar" ? "rtl" : "ltr"} activeKey="/home">
                        <Nav.Item>
                            <NavLink to='/' data-toggle="collapse"
                                data-target="#navbarCollapse" className="nav-link" onClick={closeMenu}>{t("navbar.home")}</NavLink>
                        </Nav.Item>
                        <NavDropdown
                            title={t("navbar.products.title")} id="basic-nav-dropdown">
                            <NavDropdown.Item><NavLink to="/products/cups" onClick={closeMenu} className="nav-drop">{t("navbar.products.cups")}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/products/containers" onClick={closeMenu} className="nav-drop">{t("navbar.products.containers")}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/products/covers" onClick={closeMenu} className="nav-drop">{t("navbar.products.covers")}</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Item>
                            <Nav.Link href="#testimonial" className="nav-link">Reviews</Nav.Link>
                        </Nav.Item> */}
                        <NavDropdown title={t("navbar.quality.title")}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item><NavLink to="/quality" onClick={closeMenu} className="nav-drop">{t("navbar.quality.outline")}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/quality/gmp" onClick={closeMenu} className="nav-drop">{parse(t("navbar.quality.gmp"))}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <NavLink to="/quality/iso9001" onClick={closeMenu} className="nav-drop">{t("navbar.quality.iso9001")}</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title={t("navbar.foodsafe.title")}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item ><NavLink to="/food-safe-packaging" onClick={closeMenu} className="nav-drop">{t("navbar.foodsafe.outline")}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item ><NavLink to="/foodsafe/ghs" onClick={closeMenu} className="nav-drop">{t("navbar.foodsafe.ghs")}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/foodsafe/haccp" onClick={closeMenu} className="nav-drop">{t("navbar.foodsafe.haccp")}</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <NavLink to="/foodsafe/iso22000" onClick={closeMenu} className="nav-drop">{t("navbar.foodsafe.iso22000")}</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Item>
                            <NavLink to="/food-safe-packaging" onClick={closeMenu} className="nav-link">{t("navbar.foodsafepackaging")}</NavLink>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <NavLink to="/aboutus" onClick={closeMenu} className="nav-link">About Us</NavLink>
                        </Nav.Item> */}
                        <Nav.Item>
                            <NavLink to='/contact' onClick={closeMenu} className="nav-link">{t("navbar.contactus")}</NavLink>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='Line' />
    </div>);
};

export default NavBar;