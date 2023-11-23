/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Navigation() {
  const navigate = useNavigate()
  const [isLoggedIn] = useState(false);
  const loginFunc = () =>{
    navigate('/login')
  }
  // useEffect(() => {
  //   // Gantilah ini dengan logika sesuai aplikasi Anda
    
  // }, []);
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
          
            <Nav.Link id='listNav' ><Link style={{ textDecoration:'none',color:'#24AB70',fontSize:'23px' }} to={'/'}>Beranda</Link></Nav.Link>
            <Nav.Link id='listNav' ><Link style={{ textDecoration:'none',color:'#24AB70',fontSize:'23px' }} to={'/about'}>Tentang</Link></Nav.Link>
            <Nav.Link id='listNav' ><Link style={{ textDecoration:'none',color:'#24AB70',fontSize:'23px' }} to={'/room'}>Kamar</Link></Nav.Link>
            <Nav.Link id='listNav' ><Link style={{ textDecoration:'none',color:'#24AB70',fontSize:'23px' }} to={'/contact'}>Kontak</Link></Nav.Link>
    
        </Nav>
        {isLoggedIn ? (
                <Button id='BtnLogin' onClick={loginFunc} style={{ width:'200px',borderRadius:'30px',backgroundColor:'white',border:'1px solid black',color:'black',fontSize:'20px'}}>Profil</Button>
              ) : (
                <Button id='BtnLogin' onClick={loginFunc} style={{ width:'200px',borderRadius:'30px',backgroundColor:'white',border:'1px solid black',color:'black',fontSize:'20px'}}>Login</Button>
              )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation