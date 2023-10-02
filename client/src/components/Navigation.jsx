import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";

function Navigation() {
  const [profileBtn, setprofileBtn] = useState(false)
  useEffect(() => {
   
    let user  = localStorage.getItem("user");
    if(user) setprofileBtn(true);
    if(!user) setprofileBtn(false)
   
  }, [])
const handleLogout = () => {
  let user = localStorage.removeItem("user");
}
  // useEffect(() => {
    
  // }, []);
  
  return (
    <>
      <header>
        <Container className="headerCont" fluid>
          <h1>
            Daily <span>Articles</span>
          </h1>
        </Container>

        {["md"].map((expand) => (
          <Navbar key={expand} bg="dark" data-bs-theme="dark" expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand href="/">
                <img alt="" src="da-logo3.png" width="30" height="30" className="d-inline-block align-top rounded-md" /> Daily Articles
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Category</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='nav-btn' href="/">Home</Nav.Link>
                    <Nav.Link className='nav-btn' href="/technology">Technology</Nav.Link>
                    <Nav.Link className='nav-btn' href="/sports">Sports</Nav.Link>
                    <Nav.Link className='nav-btn' href="/politics">Politics</Nav.Link>
                    <Nav.Link className='nav-btn' href="/health">Health</Nav.Link>
                    {profileBtn ? <Button href="/login" onClick={handleLogout} variant="outline-warning">
                      {"Logout"}
                    </Button>
                    :
                    <Button href="/login" variant="outline-warning">
                      {"Login"}
                    </Button>
                    }
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
}

export default Navigation;