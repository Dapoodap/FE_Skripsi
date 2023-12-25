import { useEffect, useState } from 'react';
import {Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons';
import DetailAdmin from './DetailAdmin';
import Datapenghuni from './Datapenghuni';
import Reviewbukti from './Reviewbukti';
import Reviewlaporan from './Reviewlaporan';
import Buatpengumuman from './Buatpengumuman';
import { useNavigate, useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import EditKamar from './EditKamar';

function DashboardAdmin() {
  const {id} = useParams()
    const [selectedMenu, setSelectedMenu] = useState('informasi-penghuni');
    const [showOffcanvas, setShowOffcanvas] = useState(false);

  
    const handleBackToRoot = () => {
      navigate('/');
    };
    const handleMenuClick = (menuKey) => {
      setSelectedMenu(menuKey);
      setShowOffcanvas(false); // Menutup offcanvas setelah menu dipilih pada layar handphone
    };
    function isTokenExpired(token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Waktu sekarang dalam detik
    
      return decodedToken.exp < currentTime;
    }
    const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem('token');
      try {
        // Attempt to decode the token
        
        if (isTokenExpired(token)) {
          alert("Your session has expired. Please log in again.")
          navigate('/')
        }
        const decodedToken = jwtDecode(token);
        // You can perform additional validation if needed
        // For example, check expiration, roles, etc.
        if (!decodedToken) {
          console.error('Invalid token detected. Redirecting to the home page.');
          navigate('/');
        }
        const {id} = decodedToken
        const chechkUser = async () =>{
          try {
            await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/admin/${id}`, {
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
              active={selectedMenu === 'data-penghuni'}
              onClick={() => handleMenuClick('data-penghuni')}
            >
              Data Penghuni
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={selectedMenu === 'data-kamar'}
              onClick={() => handleMenuClick('data-kamar')}
            >
              Data Kamar
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={selectedMenu === 'review-bukti'}
              onClick={() => handleMenuClick('review-bukti')}
            >
              Review Bukti
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={selectedMenu === 'review-laporan'}
              onClick={() => handleMenuClick('review-laporan')}
            >
              Review Laporan
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={selectedMenu === 'pengumuman'}
              onClick={() => handleMenuClick('pengumuman')}
            > Buat Pengumuman
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
                active={selectedMenu === 'data-penghuni'}
                onClick={() => handleMenuClick('data-penghuni')}
              >
                Data Penghuni
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={selectedMenu === 'data-kamar'}
                onClick={() => handleMenuClick('data-kamar')}
              >
                Data Kamar
              </ListGroup.Item>
              <ListGroup.Item
              action
              active={selectedMenu === 'review-bukti'}
              onClick={() => handleMenuClick('review-bukti')}
            >
              Review Bukti
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={selectedMenu === 'review-laporan'}
              onClick={() => handleMenuClick('review-laporan')}
            >
              Laporan Keluhan
            </ListGroup.Item>
            <ListGroup.Item
              action
              active={selectedMenu === 'pengumuman'}
              onClick={() => handleMenuClick('pengumuman')}
            >
              pengumuman
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
          <button className="btn btn-secondary m-2" onClick={handleBackToRoot}>
              Back to Home
            </button>
          {/* Konten */}
          {selectedMenu === 'informasi-penghuni' && (
            <DetailAdmin id={id}/>
          )}

          {selectedMenu === 'data-penghuni' && (
            <Datapenghuni/>
          )}
          {selectedMenu === 'data-kamar' && (
            <EditKamar/>
          )}
          {selectedMenu === 'review-bukti' && (
            <Reviewbukti/>
          )}
          {selectedMenu === 'review-laporan' && (
            <Reviewlaporan/>
          )}
          {selectedMenu === 'pengumuman' && (
            <Buatpengumuman/>
          )}
          {/* Tambahkan konten lain sesuai dengan menu */}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default DashboardAdmin