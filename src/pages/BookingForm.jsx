
import { Button, Col, Container, Form, ListGroup, Modal, Row, Tab, Tabs } from 'react-bootstrap'
import Dana from '../components/payment/Dana'
import Bni from '../components/payment/Bni'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function BookingForm() {
  const { state } = useLocation();
  const nav = useNavigate()
  const { tambahanElektronik, hargaKamar,noKamar } = state;
  const [activeTab, setActiveTab] = useState('ComponentA'); // Set default active tab
  const [nama, setNama] = useState('');
  const [noHP, setNoHP] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [alamat, setAlamat] = useState('');
  const [file, setFile] = useState(null); // Use null for files
  const [nomorInvoice, setNomorInvoice] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility


  const tambahanSewa = tambahanElektronik.length * 200000;
  const totalSewa = tambahanSewa + hargaKamar;
  const dp = 0.5 * totalSewa;

  const formatCurrency = (number) => {
    const formattedNumber = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber.replace(/IDR/g, 'Rp.');
  };
  const closeModal = () => {
    setShowModal(false);
    setNomorInvoice('');
    window.location.reload() // Clear invoice number when modal is closed
  };

  useEffect(()=>{
    const checkKamar = async () =>{
      try {
        const response = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar/${noKamar}`)
        if (response.data.data.statusKamar === 'isi') {
          nav('/room')
        }
      } catch (error) {
        console.log(error)
      }
    }
    checkKamar()
  },[])
  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('noHP', noHP);
    formData.append('noKamar', noKamar);
    formData.append('alamat', alamat);
    formData.append('jenisKelamin', jenisKelamin);
    formData.append('tanggal', tanggal);
    formData.append('tambahanBawaan', JSON.stringify(tambahanElektronik)); // Convert array to string
    formData.append('tambahanSewa', tambahanSewa);
    formData.append('file', file);
    

    try {
      const response = await axios.post('https://be-skripsi-6v25wnffuq-uc.a.run.app/dp', formData);
      console.log('Response from server:', response.data);
      setNomorInvoice(response.data.data.nomorInvoice); // Save invoice number
      setShowModal(true); // Show the modal
      // Handle success, show a success message, etc.
      
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show an error message, etc.
    }
  };

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
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
            <Form onSubmit={handlesubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" value={nama} placeholder="Masukkan nama Anda" name="name" onChange={(e) => setNama(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formHP">
              <Form.Label>Nomor HP (Whatsapp)</Form.Label>
              <Form.Control type="number" value={noHP} placeholder="Masukkan nama Anda" name="name" onChange={(e) => setNoHP(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formAlamat">
              <Form.Label>Alamat KTP</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nomor telepon Anda" name="phoneNumber" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control as="select" name="gender" value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="laki - laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Tanggal Masuk</Form.Label>
              <Form.Control type="date" placeholder="Masukkan alamat email Anda" name="email" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPaymentProof" className='my-3'>
              <Form.Label >Upload Bukti Pembayaran</Form.Label>
              <Form.Control type="file" name= 'file' 
              onChange={handleImage} />
            </Form.Group>

            <Form.Group controlId="formTotalHarga">
              <Form.Label>Total Harga</Form.Label>
              <Form.Control type="text" value={formatCurrency(totalSewa)} readOnly />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-5">
            Submit
          </Button>
            </Form>
          </div>
        </Col>
       
        <Col md={6}>
          <div className="bg-light p-4 rounded mt-5" style={{  }}>
            <h2 className="text-center mb-4">List dan Total Harga</h2>
            <ListGroup className='border-none' >
              <ListGroup.Item style={{ border:'none',marginBottom:'5px',background:'none'}}>
                {
                  tambahanElektronik.map((data,index)=>(
                    <>
                      <div style={{ border:'none',marginBottom:'5px',background:'none',display:'flex',justifyContent:'space-between'}}>
                      <p>{data}</p>
                      <p> {formatCurrency(200000)}</p>
                      </div>
                      
                    </>
                  ))
                }
                <div style={{ border:'none',marginBottom:'5px',background:'none',display:'flex',justifyContent:'space-between'}}>
                      <p>Harga kamar</p>
                      <p> {formatCurrency(hargaKamar)}</p>
                      </div>
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
                <p >Harga Total :</p>
                <p >{formatCurrency(totalSewa)}</p>
              </ListGroup.Item>
              <ListGroup.Item style={{ borderBottom:'none',borderLeft:'none',borderRight:'none',marginBottom:'2px',background:'none',display:'flex',justifyContent:'space-between'}}>
                <p >DP Masuk</p>
                <p >{formatCurrency(dp)}</p>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
    <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Silahkan screenshot atau salin nomor invoice ini untuk melihat statusnya nanti: {nomorInvoice}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BookingForm