import React from 'react';
import { Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import Sidebardashboaruser from '../../components/TableUser';
import Lapor from './Lapor';
import Bayarsewa from './Bayarsewa';
import Userdetail from './Userdetail';
import Usersetting from './Usersetting';

function DashboardUser() {
  const [selectedMenu, setSelectedMenu] = React.useState('informasi-penghuni');
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menuKey) => {
    setSelectedMenu(menuKey);
    setShowOffcanvas(false); // Close offcanvas after menu selection on mobile screen
  };

  const handleBackToRoot = () => {
    navigate('/');
  };

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
