import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

function Buatpengumuman() {
    const [judul, setJudul] = useState('');
  const [isiPengumuman, setIsiPengumuman] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Proses pengumuman (misalnya, kirim ke server atau lakukan tindakan lainnya)
    console.log('Mengumumkan:', { judul, isiPengumuman });

    // Setelah pengumuman, reset formulir
    setJudul('');
    setIsiPengumuman('');
  };
  return (
    <>
    <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
            <Card.Body>
              {/* Isi dengan informasi penghuni, foto profil, dsb. */}
              <Container fluid className="mt-4">
                <Row>
                    <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formJudul">
                        <Form.Label>Judul Pengumuman</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan judul pengumuman"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formIsiPengumuman">
                        <Form.Label>Isi Pengumuman</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Masukkan isi pengumuman"
                            value={isiPengumuman}
                            onChange={(e) => setIsiPengumuman(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Umumkan Pengumuman
                        </Button>
                    </Form>
                    </Col>
                </Row>
              </Container>
            </Card.Body>
    </Card>
    </>
  )
}

export default Buatpengumuman