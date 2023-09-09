import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../style/Navbar.css"


function Navbared() {
  //const backgroundImageUrl = 'https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80-image.jpg';
  return (
    <div>
    <Navbar variant="dark" expand="lg" className="transparent-bg">
    <Container>
      <Navbar.Brand href="#">Profile</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default Navbared;