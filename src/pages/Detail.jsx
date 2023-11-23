// components/RoomDetail.js

import { Container, Row, Col, Image, Card, Form, Dropdown, Button, ListGroup, Carousel, Badge } from 'react-bootstrap';
import gbr from '../assets/kos.jpg'
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
// import { useState } from 'react';


const Detail = () => {
//   const [selectedElectronics, setSelectedElectronics] = useState([]);
    const [tambahanElektronik, setTambahanElektronik] = useState([])
  const handleElectronicsChange = (eventKey) =>{
    
      if (tambahanElektronik.length === 0) {
        const newArray = [...tambahanElektronik]
        newArray.push(eventKey)
        setTambahanElektronik(newArray)
      }else{
        if(!tambahanElektronik.includes(eventKey)){
        const newArray = [...tambahanElektronik]
        newArray.push(eventKey)
        setTambahanElektronik(newArray)
        }else{
            alert('cukup pilih satu per barang saja')
        }
      }
      
  }
  useEffect(() => {
    console.log(tambahanElektronik);  
  }, [tambahanElektronik])
  

  return (
    <>
    <Navigation/>
    <Container className="mt-5" >
      <Row >
      <Col md={8} className="d-none d-md-block">
          <Image src={gbr} fluid />
        </Col>
        <Col md={4} className='d-none d-sm-block'>
          <Row>
            {/* Gambar kecil di kanan atas */}
            <Col md={12} className="mb-2">
              <Image src={gbr} fluid />
            </Col>
            {/* Gambar kecil di kanan bawah */}
            <Col md={12}>
              <Image src={gbr} fluid />
            </Col>
          </Row>
        </Col>
        <Col md={8} className="d-md-none" >
          {/* Galeri Gambar */}
          <Carousel>
            <Carousel.Item>
              <Image src={gbr}fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={gbr} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={gbr} fluid />
            </Carousel.Item>
            {/* Tambahkan gambar lainnya sesuai kebutuhan */}
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-4" >
        <Col md={12}>
          <Card style={{ backgroundColor:'#F4F4F4',border:'none' }}>
            <Card.Body>
              <Card.Title style={{ fontSize:'32px',fontWeight:'600',letterSpacing: '0.32px'}}>Kamar Tipe Eksklusif No 1</Card.Title>
              <Badge className='my-3 mx-2' bg="warning">4.5 Stars</Badge>
              
              <Card.Text style={{ fontSize:'18px',fontWeight:'400',letterSpacing:'0.32px',lineHeight:'140%' }} >
                <p>This is a simple card with an image on the left and description in the middle. Adjust the content as needed. This is a simple card with an image on the left and description in the middle. Adjust the content as needed.</p>
              </Card.Text>
              
            </Card.Body>
            <Card.Body className='py-2' style={{ borderTop:'1px solid #E0E0E0',display:'flex',gap:'5px',alignItems:'center'}}>
                <div>
                    <ul>
                        <li>
                            <p>WIFI</p>
                        </li>
                        <li>
                            <p>WIFI</p>
                        </li>
                    </ul>
                </div>
                <div>
                <ul>
                        <li>
                            <p>WIFI</p>
                        </li>
                        <li>
                            <p>WIFI</p>
                        </li>
                    </ul>
                </div>
            </Card.Body>
            <Card.Body className='py-2 ' style={{ borderTop:'1px solid #E0E0E0',display:'flex',gap:'5px',justifyContent:'end'}}>
                <p style={{ fontSize:'18px',fontWeight:'700',letterSpacing:'0.15px',lineHeight:'140%'}}>Rp.1.200.000/Bulan (include tax)</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
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
                    <Dropdown.Item eventKey="Kulkas">Kulkas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
            <h3>Tambahan : </h3>
                <ul>
                    
                    <li>
                        <p>Magic Com | Rp.1.200.000/Bulan</p>
                    </li>
                </ul>
            </div>
            </Form.Group>
            <Button id='BtnLogin' type='submit' style={{ width:'200px',borderRadius:'30px',backgroundColor:'white',border:'1px solid black',color:'black',fontSize:'20px'}}>Sewa Kamar</Button>
          </Form> 
        </Col>
        
      </Row>
    </Container>
    </>
  );
};

export default Detail;
