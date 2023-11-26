import { useState } from 'react';
import {Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons';
import Sidebardashboaruser from '../../components/TableUser';
import Bayarsewa from '../user/Bayarsewa';
import Lapor from '../user/Lapor';
import Usersetting from '../user/Usersetting';
import DetailAdmin from './DetailAdmin';

function DashboardAdmin() {
    const [selectedMenu, setSelectedMenu] = useState('informasi-penghuni');
    const [showOffcanvas, setShowOffcanvas] = useState(false);
  
    const handleMenuClick = (menuKey) => {
      setSelectedMenu(menuKey);
      setShowOffcanvas(false); // Menutup offcanvas setelah menu dipilih pada layar handphone
    };
  return (
    <>
    <Container fluid className="mt-4" >
      <Row>
        <Col md={3} lg={2} className="bg-light sidebar d-none d-md-block" >
          {/* Sidebar - hanya ditampilkan pada layar lebih besar dari md */}
          <ListGroup >
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
            {/* Tambahkan menu lain jika diperlukan */}
          </ListGroup>
        </Col>

        {/* Offcanvas untuk layar handphone */}
        <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup>
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
              {/* Tambahkan menu lain jika diperlukan */}
            </ListGroup>
            
          </Offcanvas.Body>
        </Offcanvas>

        <Col md={9} lg={10} className="content">
          {/* Tombol untuk membuka Offcanvas - hanya ditampilkan pada layar kecil */}
          <button
            className="d-md-none btn btn-primary m-2"
            onClick={() => setShowOffcanvas(true)}
            style={{ border:'none',background:'none',color:'black' }}
          >
            <List size={20} />
          </button>

          {/* Konten */}
          {selectedMenu === 'informasi-penghuni' && (
            <DetailAdmin/>
          )}

          {selectedMenu === 'status-pembayaran' && (
            <Sidebardashboaruser/>
          )}
          {selectedMenu === 'bayar-sewa' && (
            <Bayarsewa/>
          )}
          {selectedMenu === 'lapor-keluhan' && (
            <Lapor/>
          )}
          {selectedMenu === 'setting-profil' && (
            <Usersetting/>
          )}
          {/* Tambahkan konten lain sesuai dengan menu */}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default DashboardAdmin