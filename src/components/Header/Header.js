import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user.email);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GYM ACTIVE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin">
                    Sign In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
