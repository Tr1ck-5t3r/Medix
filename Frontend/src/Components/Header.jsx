import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand><img src='\logo.png' alt='Home logo' style={{width: 'auto', height: '40px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='links' to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className='links' to="/about">About</Link></Nav.Link>
            <Nav.Link><Link className='links' to="/diagnose">Diagnose</Link></Nav.Link>
            <Nav.Link><Link className='links' to="/terms">Terms</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <div >
            <SignedOut>
                <SignInButton className=" signin-button"/>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;