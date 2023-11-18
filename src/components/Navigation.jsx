/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{padding : '25px'}}>
    <Container fluid>
      <Navbar.Brand href="#" style={{color:'#24AB70', fontSize:'25px',fontWeight:'700'}}> DARIZ's KOS </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px',margin:'auto'}}
          navbarScroll
        >
          
            <Nav.Link id='listNav' href="#action1" style={{fontSize:'23px',fontWeight:'400' }}>Beranda</Nav.Link>
            <Nav.Link id='listNav' href="#action1" style={{fontSize:'23px',fontWeight:'400' }}>Tentang</Nav.Link>
            <Nav.Link id='listNav' href="#action1" style={{fontSize:'23px',fontWeight:'400' }}>Kamar</Nav.Link>
            <Nav.Link id='listNav' href="#action2" style={{fontSize:'23px',fontWeight:'400' }}>Contact</Nav.Link>
    
        </Nav>
        <Button id='BtnLogin' style={{ width:'200px',borderRadius:'30px',backgroundColor:'white',border:'1px solid black',color:'black',fontSize:'20px'}}>Login</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation