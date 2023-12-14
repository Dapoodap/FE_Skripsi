import React, { useEffect } from 'react';
import { Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import Sidebardashboaruser from '../../components/TableUser';
import Lapor from './Lapor';
import Bayarsewa from './Bayarsewa';
import Userdetail from './Userdetail';
import Usersetting from './Usersetting';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function DashboardUser() {
  const [selectedMenu, setSelectedMenu] = React.useState('informasi-penghuni');
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menuKey) => {
    setSelectedMenu(menuKey);
    setShowOffcanvas(false); // Close offcanvas after menu selection on mobile screen
  };
  function isTokenExpired(token) {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Waktu sekarang dalam detik
  
    return decodedToken.exp < currentTime;
  }
  const handleBackToRoot = () => {
    navigate('/');
  };
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to the home page if there is no token
      navigate('/');
      return;
    }
    if (isTokenExpired(token)) {
      alert("Your session has expired. Please log in again.")
      navigate('/')
    }
    try {
      // Attempt to decode the token
      const decodedToken = jwtDecode(token);
      const {id} = decodedToken

      // You can perform additional validation if needed
      // For example, check expiration, roles, etc.
      if (!decodedToken) {
        console.error('Invalid token detected. Redirecting to the home page.');
        navigate('/');
      }
      const chechkUser = async () =>{
        try {
          await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${id}`, {
              headers: {
                Authorization: token,
                    },
              });
              
        } catch (error) {
          navigate('/')
        }
      }
      chechkUser()
    } catch (error) {
      // If decoding fails, the token is invalid
      console.error('Invalid token detected. Redirecting to the home page.');
      navigate('/');
    }
  }, [navigate]);
  return (
    <>
      <Container fluid className="mt-4">
        <Row>
          <Col md={3} lg={2} className="bg-light sidebar d-none d-md-block">
            {/* Sidebar - shown only on screens larger than md */}
            <ListGroup>
              {/* Your existing menu items */}
              <ListGroup.Item
                action
                active={selectedMenu === 'informasi-penghuni'}
                onClick={() => handleMenuClick('informasi-penghuni')}
              >
                Informasi Penghuni
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={selectedMenu === 'status-pembayaran'}
                onClick={() => handleMenuClick('status-pembayaran')}
              >
                Status Pembayaran
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={selectedMenu === 'bayar-sewa'}
                onClick={() => handleMenuClick('bayar-sewa')}
              >
                Bayar Sewa
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={selectedMenu === 'lapor-keluhan'}
                onClick={() => handleMenuClick('lapor-keluhan')}
              >
                Laporan Keluhan
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={selectedMenu === 'setting-profil'}
                onClick={() => handleMenuClick('setting-profil')}
              >
                Setting Profil
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Offcanvas for small screens */}
          <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup>
                {/* Your existing menu items */}
                <ListGroup.Item
                  action
                  active={selectedMenu === 'informasi-penghuni'}
                  onClick={() => handleMenuClick('informasi-penghuni')}
                >
                  Informasi Penghuni
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={selectedMenu === 'status-pembayaran'}
                  onClick={() => handleMenuClick('status-pembayaran')}
                >
                  Status Pembayaran
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={selectedMenu === 'bayar-sewa'}
                  onClick={() => handleMenuClick('bayar-sewa')}
                >
                  Bayar Sewa
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={selectedMenu === 'lapor-keluhan'}
                  onClick={() => handleMenuClick('lapor-keluhan')}
                >
                  Laporan Keluhan
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={selectedMenu === 'setting-profil'}
                  onClick={() => handleMenuClick('setting-profil')}
                >
                  Setting Profil
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>

          <Col md={9} lg={10} className="content">
            {/* Button to open Offcanvas - shown only on small screens */}
            <button
              className="d-md-none btn btn-primary m-2"
              onClick={() => setShowOffcanvas(true)}
              style={{ border: 'none', background: 'none', color: 'black' }}
            >
              <List size={20} />
            </button>

            {/* Button to navigate back to the root path */}
            <button className="btn btn-secondary m-2" onClick={handleBackToRoot}>
              Back to Home
            </button>

            {/* Content */}
            {selectedMenu === 'informasi-penghuni' && <Userdetail />}
            {selectedMenu === 'status-pembayaran' && <Sidebardashboaruser />}
            {selectedMenu === 'bayar-sewa' && <Bayarsewa />}
            {selectedMenu === 'lapor-keluhan' && <Lapor />}
            {selectedMenu === 'setting-profil' && <Usersetting />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardUser;
