/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from "axios";


function Navigation() {
  const navigate = useNavigate()

  const [auth,setAuth] = useState()
  const [isAdmin,setIsAdmin] = useState()
  const loginFunc = () =>{
    navigate('/login')
  }
  const dashboardFunc = () =>{
    // console.log(isAdmin)
    isAdmin ? navigate('/admin') : navigate('/user')
  }
  
  const signOutFunc = () => {
    // Clear the authentication state and perform any necessary cleanup
    setAuth(false);
    setIsAdmin(false);
    localStorage.removeItem('token');
    navigate('/'); // Redirect to the home page or any other desired page
  };
  
  useEffect(() => {
    const checkUser = async () => {
      if (localStorage.getItem('token')) {
        setAuth(true)
        const token = localStorage.getItem('token')
        const id = jwtDecode(token).id
        try {
          // Coba untuk memanggil API pengguna
          await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${id}`);
          // Jika sukses, berarti pengguna bukan admin
          setIsAdmin(false);
        } catch (userError) {
          // Jika gagal, coba untuk memanggil API admin
          try {
            await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/admin/${id}`, {
            headers: {
              Authorization: token,
            },
          });
            // Jika sukses, berarti pengguna adalah admin
            setIsAdmin(true);
          } catch (adminError) {
            // Jika juga gagal, berarti pengguna bukan admin
            setAuth(false)
          }
        }
      } else {
        setAuth(false)
      }
    };

    checkUser();
  }, []);
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
        {auth ? (
              <div className="d-flex gap-2">
                <Button
                  id='BtnProfile'
                  onClick={dashboardFunc}
                  className="flex-grow-1"
                  style={{ borderRadius: '30px', backgroundColor: 'white', border: '1px solid black', color: 'black', fontSize: '20px' }}
                >
                  Profil
                </Button>
                <Button
                  id='BtnSignOut'
                  onClick={signOutFunc}
                  className="flex-grow-1"
                  style={{ borderRadius: '30px', backgroundColor: '#24AB70', color: 'white', fontSize: '20px' }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                id='BtnLogin'
                onClick={loginFunc}
                className="flex-grow-1"
                style={{ borderRadius: '30px', backgroundColor: 'white', border: '1px solid black', color: 'black', fontSize: '20px' }}
              >
                Login
              </Button>
            )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation