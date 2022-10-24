import { Nav, Navbar, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="NavbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey={1} as={Link} to ="/">Home</NavLink>
                    <NavLink eventKey={2} as={Link} to ="/wishlist">My Wishlist</NavLink>
                    <NavLink eventKey={3} as={Link} to ="/signin">Sign in</NavLink>
                    <NavLink eventKey={4} as={Link} to ="/register">Register</NavLink>
                    <NavLink eventKey={5} as={Link} to ="/store">Store Locator</NavLink>
                    <NavLink eventKey={5} as={Link} to ="/About">About Us</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Navigation;