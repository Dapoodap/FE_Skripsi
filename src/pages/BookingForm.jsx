
import { Button, Col, Container, Form, ListGroup, Row, Tab, Tabs } from 'react-bootstrap'
import Dana from '../components/payment/Dana'
import Bni from '../components/payment/Bni'
import { useState } from 'react';


function BookingForm() {
  const [activeTab, setActiveTab] = useState(); // Tab aktif awal

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
    <Container className="vh-50v d-flex align-items-center justify-content-center">
      <Row className="w-100">
        {/* Kolom untuk layar laptop dan tablet */}
        
        <Col md={12} className="mb-5 mb-md-0">
          <div className="bg-light p-4 rounded">
            <h2 className="text-center mb-4">Pembayaran Sewa</h2>
            <Tabs activeKey={activeTab} onSelect={(tab) => handleTabChange(tab)}>
        <Tab eventKey="ComponentA" title="Dana">
          <Dana />
        </Tab>
        <Tab eventKey="ComponentB" title="BNI">
          <Bni />
        </Tab>
      </Tabs>
            
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="vh-50 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        {/* Kolom untuk layar laptop dan tablet */}
        
        <Col md={6} xs={12} className="mb-4 mb-md-0 mt-xs-300vh ">
          <div className="bg-light p-4 rounded mt-5">
            <h2 className="text-center mb-4">Form Pembayaran</h2>
            <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" name="name" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control type="number" placeholder="Masukkan nomor telepon Anda" name="phoneNumber" />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control as="select" name="gender">
                <option value="">Pilih Jenis Kelamin</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan alamat email Anda" name="email" />
            </Form.Group>

            <Form.Group controlId="formPaymentProof" className='my-3'>
              <Form.Label >Upload Bukti Pembayaran</Form.Label>
              <input
            type="file"
            className="custom-file-input mx-3"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
            </Form.Group>

            <Form.Group controlId="formTotalHarga">
              <Form.Label>Total Harga</Form.Label>
              <Form.Control type="text"  readOnly />
            </Form.Group>

            <Button className='my-3' variant="primary" type="submit">
              Kirim
            </Button>
          </Form>
          </div>
        </Col>

        <Col md={6}>
          <div className="bg-light p-4 rounded mt-5" style={{  }}>
            <h2 className="text-center mb-4">List dan Total Harga</h2>
            <ListGroup className='border-none' >
              <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none',display:'flex',justifyContent:'space-between'}}>
                <p>Magic Com</p>
                <p>Magic Com</p>

              </ListGroup.Item>
              {/* <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none'}}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none'}}>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none'}}>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none'}}>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
            <ListGroup className='border-none' >
            {/* <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none',display:'flex',justifyContent:'space-between'}}>
                

              </ListGroup.Item> */}
              <ListGroup.Item style={{ borderBottom:'none',borderLeft:'none',borderRight:'none',marginBottom:'2px',background:'none',display:'flex',justifyContent:'space-between'}}>
                <p >DP Masuk</p>
                <p >200.0000/bulan</p>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default BookingForm