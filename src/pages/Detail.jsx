// components/RoomDetail.js

import { Container, Row, Col, Image, Card, Form, Dropdown, Button, Carousel, Badge } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';


const Detail = () => {
  function formatCurrency(number) {
    const formattedNumber = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber.replace(/IDR/g, 'Rp.');
  }

  const { id } = useParams();
  const [kamar, setKamar] = useState([]);
  const [fasilitas, setFasilitas] = useState([]);
  const [gambar, setGambar] = useState([]);
  const [tambahanElektronik, setTambahanElektronik] = useState([]);

  useEffect(() => {
    const fetchKamarList = async () => {
      try {
        const response = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar/${id}`);
        setKamar(response.data.data);
        if (response.data.data.statusKamar === "isi") {
          nav('/room')
        }
        setGambar(JSON.parse(response.data.data.gambarKamar));
        setFasilitas(JSON.parse(response.data.data.fasilitasKamar));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchKamarList();
  }, []);

  const handleElectronicsChange = (eventKey) => {
    if (!tambahanElektronik.includes(eventKey)) {
      setTambahanElektronik((prevItems) => [...prevItems, eventKey]);
    } else {
      alert('Cukup pilih satu per barang saja');
    }
  };

  const handleRemoveItem = (item) => {
    setTambahanElektronik((prevItems) => prevItems.filter((i) => i !== item));
  };

  const nav = useNavigate();
  const booking = () => {
    nav('/booking',{ state: { tambahanElektronik, hargaKamar: kamar.hargaKamar,noKamar : id } });
  };
  return (
    <>
    <Navigation/>
    <Container className="mt-5" >
      <Row >
      <Col md={8} className="d-none d-md-block">
          <Image src={gambar[0]} fluid  style={{ objectFit: 'cover', height: '800px', width: '100%' }}/>
        </Col>
        <Col md={4} className='d-none d-sm-block'>
          <Row>
            {/* Gambar kecil di kanan atas */}
            <Col md={12} className="mb-2">
              <Image src={gambar[1]} style={{ objectFit: 'cover', height: '400px', width: '100%' }} fluid />
            </Col>
            {/* Gambar kecil di kanan bawah */}
            <Col md={12}>
              <Image src={gambar[2]} style={{ objectFit: 'cover', height: '400px', width: '100%' }} fluid />
            </Col>
          </Row>
        </Col>
        <Col md={8} className="d-md-none" >
          {/* Galeri Gambar */}
          <Carousel>
            <Carousel.Item>
              <Image src={gambar[0]}fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={gambar[1]} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={gambar[2]} fluid />
            </Carousel.Item>
            {/* Tambahkan gambar lainnya sesuai kebutuhan */}
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-4" >
        <Col md={12}>
          <Card style={{ backgroundColor:'#F4F4F4',border:'none' }}>
            <Card.Body>
              <Card.Title style={{ fontSize:'32px',fontWeight:'600',letterSpacing: '0.32px'}}>Kamar Tipe {kamar.tipeKamar} No {id}</Card.Title>
              <Badge className='my-3 mx-2' bg="warning">{kamar.ratingKamar} Stars</Badge>
              
              <Card.Text style={{ fontSize:'18px',fontWeight:'400',letterSpacing:'0.32px',lineHeight:'140%' }} >
                <p>{kamar.deskripsiKamar}.</p>
              </Card.Text>
              
            </Card.Body>
            <Card.Body className='py-2' style={{ borderTop:'1px solid #E0E0E0',display:'flex',gap:'5px',alignItems:'center'}}>
                <div><ul>
                    {fasilitas.map((fas)=>(
                      <>
                        
                        <li>
                            <p>{fas}</p>
                        </li>
                    
                      </>
                    ))}</ul>
                </div>
        
            </Card.Body>
            <Card.Body className='py-2 ' style={{ borderTop:'1px solid #E0E0E0',display:'flex',gap:'5px',justifyContent:'end'}}>
                <p style={{ fontSize:'18px',fontWeight:'700',letterSpacing:'0.15px',lineHeight:'140%'}}>{formatCurrency(kamar.hargaKamar)}/Bulan (include tax)</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className='py-4'>
    <Row className="mt-4">
        <h3>Pesan Kamar</h3>
        <Col md={12}>
          <Form>
            <Form.Group className='d-flex justify-content-between flex-wrap align-items-center' >
            <Dropdown style={{width:'600px'}} onSelect={handleElectronicsChange}>
                <Dropdown.Toggle style={{ border:'1px solid black', backgroundColor:'white',color:'black',width:'100%'}} id="dropdown-basic">
                    tambahan bawaan
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ border:'1px solid black', backgroundColor:'white',color:'black',width:'100%'}}>
                    <Dropdown.Item eventKey="Magic Com">Magic Com</Dropdown.Item>
                    <Dropdown.Item eventKey="Pemanas Air">Pemanas Air</Dropdown.Item>
                    <Dropdown.Item eventKey="Kulkas Kecil">Kulkas</Dropdown.Item>
                    <Dropdown.Item eventKey="Setrika">Setrika</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
            <h3>Tambahan : </h3>
                <ul>
                {tambahanElektronik.map((item) => (
                      <li key={item}>
                        <p style={{ fontSize:'20px' }}>
                          {item} | + {formatCurrency(200000)}/Bulan{' '}
                          <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item)}>
                            <FontAwesomeIcon icon={faTimes} /> {/* Menggunakan ikon silang (X) */}
                          </Button>
                        </p>
                      </li>
                    ))}
                </ul>
            </div>
            </Form.Group>
            <Button id='BtnLogin' onClick={booking} type='submit' style={{ width:'200px',borderRadius:'30px',backgroundColor:'white',border:'1px solid black',color:'black',fontSize:'20px'}}>Sewa Kamar</Button>
          </Form> 
        </Col>
        
      </Row>
    </Container>
    </>
  );
};

export default Detail;
