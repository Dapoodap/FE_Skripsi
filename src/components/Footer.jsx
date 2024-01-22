import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <Container style={{ maxWidth: '100%', padding: '15px', backgroundColor: '#24AB70', minHeight: '150px' }}>
        <Row>
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h1 style={{ fontSize: '2.5rem', fontWeight: '500', lineHeight: '1.2' }}>Dariz's Kos Website</h1>
            <p style={{ fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.5' }}>
              Selamat datang di Wisma Kos Dariz, destinasi terbaik untuk pengalaman hunian tanpa kompromi di Yogyakarta. Kami menyajikan konsep hunian modern dengan berbagai fasilitas unggulan dan kenyamanan terbaik untuk memenuhi kebutuhan penyewa kami.
            </p>
          </Col>
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '500', lineHeight: '1.2' }}>Content</h1>
              <ul className="list-unstyled">
                <li><a style={{ color: 'black', fontSize: '1.5rem', marginBottom: '20px' }} href="#">Tentang</a></li>
                <li><a style={{ color: 'black', fontSize: '1.5rem', marginBottom: '20px' }} href="#">Kamar</a></li>
                <li><a style={{ color: 'black', fontSize: '1.5rem', marginBottom: '20px' }} href="#">Invoice</a></li>
              </ul>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '500', lineHeight: '1.2' }}>Location</h1>
            <p style={{ fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.5' }}>Jalan Sumurboto Barat 3 No 4</p>
            <iframe
              style={{
                border: "1px solid black",
                maxWidth: "100%",
                height: "250px", // Adjust the height as needed
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.621156544238!2d110.42300927483669!3d-7.053723692948588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bff7a04ff7f%3A0xee45cd932fe9ef5e!2sWisma%20Kos%20Dariz!5e0!3m2!1sid!2sid!4v1700371066186!5m2!1sid!2sid"
            ></iframe>
          </Col>
        </Row>

        <Row style={{ justifyContent: 'center', color: '#fff', marginTop: '20px' }}>
          <Col xs={12} className="text-center">
            <p style={{ fontSize: '1rem' }}>© 2024 Dariz's Kos. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
