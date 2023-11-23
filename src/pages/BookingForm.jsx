
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


function BookingForm() {
  return (
    <>
    <Container className="mt-5">
    <Row className="justify-content-center">
        <Col md={6}>
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

            <Form.Group controlId="formPaymentProof">
              <Form.Label>Upload Bukti Pembayaran</Form.Label>
              <input type="file" />
            </Form.Group>

            <Form.Group controlId="formTotalHarga">
              <Form.Label>Total Harga</Form.Label>
              <Form.Control type="text"  readOnly />
            </Form.Group>

            <Button variant="primary" type="submit">
              Kirim
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default BookingForm